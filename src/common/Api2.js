import axios from "axios";
import streamersList from "../top-streamers/TopStreamersList";
import gameList from "./GameList";

const TWITCH_STREAM_SEARCH = "https://api.twitch.tv/helix/streams";
const TWITCH_AUTH = process.env.REACT_APP_TWITCH_AUTH;
const TWITCH_CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID;
const twitchHeaders = {
	Authorization: `Bearer ${TWITCH_AUTH}`,
	"Client-Id": TWITCH_CLIENT_ID,
};

const YOUTUBE_STREAM_SEARCH = "https://www.googleapis.com/youtube/v3/videos";
const INVIDIOUS_BASE_URL = "https://vid.puffyan.us/api/v1";
const YT_API_KEY = process.env.REACT_APP_YT_API;
const youtubeHeaders = {
	Accept: "application/json",
};

class LSSearch {
	static async apiCall(params, headers, apiURL) {
		try {
			const config = {
				params,
				headers,
			};
			const result = await axios.get(apiURL, config);
			return result;
		} catch (err) {
			console.log(err);
		}
	}

	static async searchTwitch(gameId) {
		const params = {
			game_id: gameId,
			language: "en",
			first: 20,
		};
		const result = await this.apiCall(
			params,
			twitchHeaders,
			TWITCH_STREAM_SEARCH
		);
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
		console.log(streamData);
		return streamData;
	}

	static async searchYoutube(searchTerm) {
		const videoIds = await this.getYtLiveIds(searchTerm);
		const streamData = await this.getYtData(videoIds);
		return streamData;
	}

	static async getYtLiveIds(searchTerm) {
		const params = {
			q: searchTerm,
			features: "live",
			type: "video",
			fields: "videoId",
		};
		const result = await this.apiCall(
			params,
			youtubeHeaders,
			`${INVIDIOUS_BASE_URL}/search`
		);
		const data = result.data.map((obj) => obj.videoId);
		const videoIds = data.join(",");
		return videoIds;
	}

	static async getYtData(videoIds) {
		const params = {
			part: "snippet,liveStreamingDetails",
			key: YT_API_KEY,
			id: videoIds,
		};
		const result = await this.apiCall(
			params,
			youtubeHeaders,
			YOUTUBE_STREAM_SEARCH
		);
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
	}

	static async searchLives(searchTerm) {
		const game = gameList.filter((game) => game.label === searchTerm);
		const ytStreams = await this.searchYoutube(searchTerm);
		const twitchStreams = await this.searchTwitch(game[0].twitchId);
		const sortByViews = (a, b) => {
			if (a.viewers < b.viewers) {
				return 1;
			}
			if (a.viewers > b.viewers) {
				return -1;
			}
			return 0;
		};
		const allStreams = [...ytStreams, ...twitchStreams];
		const sortedStreams = allStreams.sort(sortByViews);
		return sortedStreams;
	}

	static async twitchIsLive(streamer) {
		const params = {
			user_login: streamer.channelId,
			first: "1",
		};
		const result = await this.apiCall(
			params,
			twitchHeaders,
			TWITCH_STREAM_SEARCH
		);
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
	}

	static async youtubeisLive(streamer) {
		const params = {
			continuation: "String",
			sort_by: "newest",
			max_results: 1,
			fields: "authorId,author,videoThumbnails,title,videoId,lengthSeconds",
		};
		const result = await this.apiCall(
			params,
			youtubeHeaders,
			`${INVIDIOUS_BASE_URL}/channels/latest/${streamer.channelId}`
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
	}

	static async isTopLive() {
		const randomSort = (a, b) => {
			const randomNum = Math.floor(Math.random() * 2);
			if (randomNum === 0) {
				return 1;
			} else {
				return -1;
			}
		};
		const sortByABC = (a, b) => {
			if (a.channelName.toUpperCase() < b.channelName.toUpperCase()) {
				return -1;
			}
			if (a.channelName > b.channelName) {
				return 1;
			}
			return 0;
		};
		const verifiedList = await Promise.all(
			streamersList.map(async (streamer) => {
				if (streamer.platform === "youtube") {
					return await this.youtubeisLive(streamer);
				} else {
					return await this.twitchIsLive(streamer);
				}
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

		console.log(live);

		const sortedLives = live.sort(randomSort);
		if (sortedLives.length > 0) {
			const highlight = sortedLives.shift();
			highlightStream.push(highlight);
		}
		const sortedOffline = notLive.sort(sortByABC);
		return {
			highlight: highlightStream,
			liveStreams: sortedLives,
			offline: sortedOffline,
		};
	}
}

export default LSSearch;
