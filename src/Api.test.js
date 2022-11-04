import { StreamService, LiveStreamSearch, Random } from "./Api";
import TopStreamersList from "./top-streamers/TopStreamersList";

test("calling randomNum", () => {
	const randNum = Random.randomNum(5, 10);
	expect(randNum).toBeGreaterThanOrEqual(5);
	expect(randNum).toBeLessThanOrEqual(10);
});

test("calling getRandElement", () => {
	const arr = ["a", "b", "c", "d", "e"];
	const randEle = Random.getRandElement(arr);
	expect(arr).toContain(randEle);
});

test("calling search Twitch", async () => {
	const searchTerm = "just-chatting";
	const api = new StreamService("twitch");
	const result = await api.Service.searchLives(searchTerm);
	expect(result).toBeInstanceOf(Array);
	expect(result.length).toBeGreaterThan(0);
	expect(result[0]).toEqual({
		channelName: expect.any(String),
		channelId: expect.any(String),
		platform: "twitch",
		title: expect.any(String),
		streamId: expect.any(String),
		thumbnail: expect.any(String),
		viewers: expect.any(Number),
	});
});

test("calling getYtLiveIds and getYtData", async () => {
	const searchTerm = "just-chatting";
	const api = new StreamService("youtube");
	const result = await api.Service.searchLives(searchTerm);
	expect(result).toBeInstanceOf(Array);
	expect(result.length).toBeGreaterThan(0);
	expect(result[0]).toEqual({
		channelName: expect.any(String),
		channelId: expect.any(String),
		platform: "youtube",
		title: expect.any(String),
		streamId: expect.any(String),
		thumbnail: expect.any(String),
		viewers: expect.any(Number),
	});
});

test("calling searchLives", async () => {
	const searchTerm = "just-chatting";
	const result = await LiveStreamSearch.searchLives(searchTerm);
	expect(result).toBeInstanceOf(Array);
	expect(result.length).toBeGreaterThan(0);
	expect(result[0]).toEqual({
		channelName: expect.any(String),
		channelId: expect.any(String),
		platform: expect.any(String),
		title: expect.any(String),
		streamId: expect.any(String),
		thumbnail: expect.any(String),
		viewers: expect.any(Number),
	});
});

test("calling twitchIsLive", async () => {
	const testStreamer = TopStreamersList[2];
	const api = new StreamService("twitch");
	const result = await api.Service.isLive(testStreamer);
	expect(result).toEqual({
		channelName: expect.any(String),
		profileImg: expect.any(String),
		platform: "twitch",
		channelId: expect.any(String),
		streamId: expect.any(String),
		title: expect.any(String),
		thumbnail: expect.any(String),
	});
});

test("calling youtubeIsLive", async () => {
	const testStreamer = TopStreamersList[1];
	const api = new StreamService("youtube");
	const result = await api.Service.isLive(testStreamer);
	expect(result).toEqual({
		channelName: expect.any(String),
		profileImg: expect.any(String),
		platform: "youtube",
		channelId: expect.any(String),
		streamId: expect.any(String),
		title: expect.any(String),
		thumbnail: expect.any(String),
	});
});

test("calling isTopLive", async () => {
	const { highlight, liveStreams, offline } =
		await LiveStreamSearch.isTopLive();
	expect(highlight).toBeInstanceOf(Object);
	expect(liveStreams).toBeInstanceOf(Array);
	expect(offline).toBeInstanceOf(Array);
});
