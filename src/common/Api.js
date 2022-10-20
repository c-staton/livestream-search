import axios from "axios";
import streamersList from "../top-streamers/TopStreamersList";
import gameList from "./GameList";

const TWITCH_STREAM_SEARCH = "https://api.twitch.tv/helix/streams";
const TWITCH_AUTH = process.env.REACT_APP_TWITCH_AUTH;
const TWITCH_CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID;

const YOUTUBE_STREAM_SEARCH = "https://www.googleapis.com/youtube/v3/videos";
const YOUTUBE_IDS_URL = "https://vid.puffyan.us/api/v1";
const YT_API_KEY = process.env.REACT_APP_YT_API;

class StreamService {
	Service = null;
	constructor(serviceName) {
		switch (serviceName) {
			case "youtube":
				this.Service = YTService;
				break;
			case "twitch":
				this.Service = TwitchService;
				break;
			default:
				throw new Error("Unknown service name");
		}
	}

	searchLives(searchTerm) {
		this.Service.searchLives(searchTerm);
	}

	isLive(streamer) {
		this.Service.isLive(streamer);
	}
}

class TwitchService {
	static async apiCall(apiURL, params) {
		try {
			const config = {
				params,
				headers: {
					Authorization: `Bearer ${TWITCH_AUTH}`,
					"Client-Id": TWITCH_CLIENT_ID,
				},
			};
			const result = await axios.get(apiURL, config);
			return result;
		} catch (err) {
			console.log(err);
		}
	}

	static async searchLives(searchTerm, needData = true) {
		try {
			const game = gameList.filter((game) => game.label === searchTerm);
			const gameId = game[0].twitchId;
			const params = {
				game_id: gameId,
				language: "en",
				first: 20,
			};
			const result = await this.apiCall(TWITCH_STREAM_SEARCH, params);
			let streamData = result.data.data.map((stream) => {
				return {
					channelName: stream.user_name,
					channelId: stream.user_login,
					platform: "twitch",
					title: stream.title,
					streamId: stream.id,
					thumbnail: `https://static-cdn.jtvnw.net/previews-ttv/live_user_${stream.user_login}-320x180.jpg`,
					viewers: Number(stream.viewer_count),
				};
			});
			return streamData;
		} catch (err) {
			console.log(err);
		}
	}

	static async isLive(streamer) {
		try {
			const params = {
				user_login: streamer.channelId,
				first: "1",
			};
			const result = await this.apiCall(TWITCH_STREAM_SEARCH, params);
			const data = result.data.data;
			if (data.length < 1) {
				return streamer;
			}
			const latestVid = data[0];
			const streamData = {
				channelName: latestVid.user_name,
				channelId: latestVid.user_login,
				platform: "twitch",
				title: latestVid.title,
				streamId: latestVid.id,
				thumbnail: `https://static-cdn.jtvnw.net/previews-ttv/live_user_${latestVid.user_login}-320x180.jpg `,
			};
			return streamData;
		} catch (err) {
			console.log(err);
		}
	}
}

class YTService {
	static async apiCall(apiURL, params) {
		try {
			const config = {
				params,
				headers: {
					Accept: "application/json",
				},
			};
			const result = await axios.get(apiURL, config);
			return result;
		} catch (err) {
			console.log(err);
		}
	}

	static async searchLives(searchTerm, needData = true) {
		try {
			const liveIds = await this.getLiveIds(searchTerm);
			if (needData) {
				const liveData = await this.getLiveData(liveIds);
				return liveData;
			} else {
				return liveIds;
			}
		} catch (err) {
			console.log(err);
		}
	}

	static async getLiveIds(searchTerm) {
		try {
			const params = {
				q: searchTerm,
				features: "live",
				type: "video",
				fields: "videoId",
			};
			const result = await this.apiCall(`${YOUTUBE_IDS_URL}/search`, params);
			const videoIds = result.data.map((obj) => obj.videoId);
			return videoIds;
		} catch (err) {
			console.log(err);
		}
	}

	static async getLiveData(videoIds) {
		try {
			videoIds = videoIds.join(",");
			const params = {
				part: "snippet,liveStreamingDetails",
				key: YT_API_KEY,
				id: videoIds,
			};
			const result = await this.apiCall(YOUTUBE_STREAM_SEARCH, params);
			const data = result.data.items.map((stream) => {
				let viewCount = stream.liveStreamingDetails.concurrentViewers;
				return {
					channelName: stream.snippet.channelTitle,
					channelId: stream.snippet.channelId,
					platform: "youtube",
					title: stream.snippet.title,
					streamId: stream.id,
					thumbnail: stream.snippet.thumbnails.medium.url,
					viewers: viewCount > 0 ? Number(viewCount) : 0,
				};
			});
			return data;
		} catch (err) {
			console.log(err);
		}
	}

	static async isLive(streamer) {
		try {
			const params = {
				continuation: "String",
				sort_by: "newest",
				max_results: 1,
				fields: "authorId,author,videoThumbnails,title,videoId,lengthSeconds",
			};
			const result = await this.apiCall(
				`${YOUTUBE_IDS_URL}/channels/latest/${streamer.channelId}`,
				params
			);
			const data = result.data;
			if (data.length < 1) {
				return streamer;
			}
			const latestVid = data[0];
			const vidLength = latestVid.lengthSeconds; // if api says zero then it must be a livestream
			if (vidLength === 0) {
				const data = {
					channelName: latestVid.author,
					channelId: latestVid.authorId,
					platform: "youtube",
					title: latestVid.title,
					streamId: latestVid.videoId,
					thumbnail: latestVid.videoThumbnails[0].url,
				};
				return data;
			} else {
				return streamer;
			}
		} catch (err) {
			console.log(err);
		}
	}
}

class LiveStreamSearch {
	static async searchLives(searchTerm) {
		try {
			const twitchApi = new StreamService("twitch");
			const twitchStreams = await twitchApi.Service.searchLives(searchTerm);
			const ytApi = new StreamService("youtube");
			const ytStreams = await ytApi.Service.searchLives(searchTerm);
			const allStreams = [...ytStreams, ...twitchStreams];
			const sortedStreams = allStreams.sort(this.viewersSort);
			return sortedStreams;
		} catch (err) {
			console.log(err);
		}
	}

	static async isTopLive() {
		try {
			const verifiedList = await Promise.all(
				streamersList.map(async (streamer) => {
					const api = new StreamService(streamer.platform);
					return await api.Service.isLive(streamer);
				})
			);
			const live = [];
			const notLive = [];
			const highlightStream = [];
			for (let streamer of verifiedList) {
				if (streamer.streamId !== "") {
					live.push(streamer);
				} else {
					notLive.push(streamer);
				}
			}
			const sortedLives = live.sort(this.randomSort);
			if (sortedLives.length > 0) {
				const highlight = sortedLives.shift();
				highlightStream.push(highlight);
			}
			const sortedOffline = notLive.sort(this.alphabetSort);
			return {
				highlight: highlightStream,
				liveStreams: sortedLives,
				offline: sortedOffline,
			};
		} catch (err) {
			console.log(err);
		}
	}

	static viewersSort(a, b) {
		if (a.viewers < b.viewers) {
			return 1;
		}
		if (a.viewers > b.viewers) {
			return -1;
		}
		return 0;
	}

	static alphabetSort(a, b) {
		if (a.channelName.toUpperCase() < b.channelName.toUpperCase()) {
			return -1;
		}
		if (a.channelName > b.channelName) {
			return 1;
		}
		return 0;
	}

	static randomSort(a, b) {
		const randomNum = Math.floor(Math.random() * 2);
		if (randomNum === 0) {
			return 1;
		} else {
			return -1;
		}
	}
}

export { StreamService, LiveStreamSearch };
