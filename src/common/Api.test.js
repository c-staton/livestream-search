import LSSearch from "./Api";
import TopStreamersList from "../top-streamers/TopStreamersList";

test("calling search Twitch", async () => {
	const justChattingId = "509658";
	const result = await LSSearch.searchTwitch(justChattingId);
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
	const searchTerm = "Just Chatting";
	const idResult = await LSSearch.getYtLiveIds(searchTerm);
	expect(idResult).toBeInstanceOf(Array);
	expect(idResult.length).toBeGreaterThan(0);
	expect(idResult[0]).toEqual(expect.any(String));

	const dataResult = await LSSearch.getYtData(idResult);
	expect(dataResult).toBeInstanceOf(Array);
	expect(dataResult.length).toBeGreaterThan(0);
	expect(dataResult[0]).toEqual({
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
	const searchTerm = "Just Chatting";
	const result = await LSSearch.searchLives(searchTerm);
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
	const testStreamer = TopStreamersList[0];
	const result = await LSSearch.twitchIsLive(testStreamer);
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
	const result = await LSSearch.youtubeisLive(testStreamer);
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
	const { highlight, liveStreams, offline } = await LSSearch.isTopLive();
	expect(highlight).toBeInstanceOf(Array);
	expect(liveStreams).toBeInstanceOf(Array);
	expect(offline).toBeInstanceOf(Array);
});
