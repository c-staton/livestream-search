import LiveStreamSearch from "./Api";

test("calling searchLives", async () => {
	const searchTerm = "just-chatting";
	const result = await LiveStreamSearch.searchLives(searchTerm);
	let streams = result.data.streams;
	expect(streams).toBeInstanceOf(Array);
	expect(streams.length).toBeGreaterThan(0);
	expect(streams[0]).toEqual({
		channelName: expect.any(String),
		channelId: expect.any(String),
		platform: expect.any(String),
		title: expect.any(String),
		streamId: expect.any(String),
		thumbnail: expect.any(String),
		viewers: expect.any(Number),
	});
});

test("calling isTopLive", async () => {
	const result = await LiveStreamSearch.isTopLive();
	const data = result.data;
	expect(data).toBeInstanceOf(Object);
	expect(data).toEqual({
		online: expect.any(Array),
		offline: expect.any(Array),
	});
});

test("calling randomStream", async () => {
	const result = await LiveStreamSearch.randomStream();
	const stream = result.data;
	expect(stream).toBeInstanceOf(Object);
	expect(stream).toEqual({
		category: expect.any(String),
		link: expect.any(String),
		platform: expect.any(String),
	});
});
