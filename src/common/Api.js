import axios from "axios";
import {
	YT_LIVE_SEARCH,
	YT_VIEWS_SEARCH,
	API_KEY,
	TWITCH_LIVE_SEARCH,
	TWITCH_VIEWS_SEARCH,
	TWITCH_CATEGORY_FETCH,
	TWITCH_AUTH,
	TWITCH_CLIENT_ID,
} from "./ApiKeys";

class YTApi {
	static async searchLives(searchTerm, needViews = true) {
		try {
			const config = {
				params: {
					part: "snippet",
					eventType: "live",
					maxResults: "10",
					order: "viewCount",
					videoCategoryId: "20",
					q: searchTerm,
					type: "video",
					key: API_KEY,
				},
				headers: {
					Accept: "application/json",
				},
			};

			const result = await axios.get(YT_LIVE_SEARCH, config);
			let data = result.data.items.map((vid) => {
				return {
					videoId: vid.id.videoId,
					channelId: vid.snippet.channelId,
					channelName: vid.snippet.channelTitle,
					thumbnails: vid.snippet.thumbnails.medium,
					title: vid.snippet.title,
					platform: "youtube",
				};
			});
			if (needViews) {
				data = await Promise.all(
					data.map(async (vid) => {
						return {
							...vid,
							viewCount: await this.getViewCount(vid.videoId),
						};
					})
				);
			}
			console.log("1 YT Api Call");
			return data;
		} catch (err) {
			console.log(err);
			return [];
		}
	}

	static async getViewCount(videoId) {
		try {
			const config = {
				params: {
					part: "liveStreamingDetails",
					id: videoId,
					key: API_KEY,
				},
				headers: {
					Accept: "application/json",
				},
			};
			const result = await axios.get(YT_VIEWS_SEARCH, config);
			let viewCount = Number(
				result.data.items[0].liveStreamingDetails.concurrentViewers
			);
			if (isNaN(viewCount)) viewCount = 0;
			console.log("1 YT Api Call");
			return viewCount;
		} catch (err) {
			return 0;
		}
	}

	static async isLive(streamer) {
		try {
			const config = {
				params: {
					channelId: streamer.channelId,
					type: "video",
					eventType: "live",
					key: API_KEY,
				},
				headers: {
					Accept: "application/json",
				},
			};
			const result = await axios.get(YT_LIVE_SEARCH, config);
			if (result.length > 0) {
				let data = result.data.items.map((vid) => {
					return {
						videoId: vid.id.videoId,
						channelId: vid.snippet.channelId,
						channelName: vid.snippet.channelTitle,
						thumbnails: vid.snippet.thumbnails.medium,
						title: vid.snippet.title,
						platform: "youtube",
					};
				});
				return data;
			} else {
				return streamer;
			}
		} catch (err) {
			return streamer;
		}
	}
}

class TwitchApi {
	static async searchLives(searchTerm, needViews = true) {
		const config = {
			params: {
				query: searchTerm,
				live_only: "true",
				first: "10",
			},
			headers: {
				Authorization: `Bearer ${TWITCH_AUTH}`,
				"Client-Id": TWITCH_CLIENT_ID,
			},
		};

		const result = await axios.get(TWITCH_LIVE_SEARCH, config);
		console.log("1 Twitch Api Call");
		let data = result.data.data.map((vid) => {
			return {
				videoId: vid.id,
				channelId: vid.broadcaster_login,
				channelName: vid.display_name,
				thumbnails: {
					url: `https://static-cdn.jtvnw.net/previews-ttv/live_user_${vid.broadcaster_login}-320x180.jpg `,
				},
				title: vid.title,
				platform: "twitch",
			};
		});
		if (needViews) {
			data = await Promise.all(
				data.map(async (vid) => {
					return {
						...vid,
						viewCount: await this.getViewCount(vid.channelId),
					};
				})
			);
			console.log("1 Twitch Api Call");
		}
		return data;
	}

	static async getViewCount(channelId) {
		try {
			const config = {
				params: {
					user_login: channelId,
					first: "1",
				},
				headers: {
					Authorization: `Bearer ${TWITCH_AUTH}`,
					"Client-Id": TWITCH_CLIENT_ID,
				},
			};

			const result = await axios.get(TWITCH_VIEWS_SEARCH, config);
			console.log("1 Twitch Api Call");
			let viewCount = result.data.data[0].viewer_count;
			if (isNaN(viewCount)) viewCount = 0;
			return viewCount;
		} catch (err) {
			//handle error
		}
	}

	static async isLive(streamer) {
		const config = {
			params: {
				user_login: streamer.channelId,
				first: "1",
			},
			headers: {
				Authorization: `Bearer ${TWITCH_AUTH}`,
				"Client-Id": TWITCH_CLIENT_ID,
			},
		};
		const result = await axios.get(TWITCH_VIEWS_SEARCH, config);
		console.log("1 Twitch Api Call");
		if (result.data.data.length > 0) {
			let data = result.data.data.map((vid) => {
				return {
					channelId: vid.user_login,
					channelName: vid.user_name,
					platform: "twitch",
					thumbnails: {
						url: `https://static-cdn.jtvnw.net/previews-ttv/live_user_${vid.user_login}-320x180.jpg `,
					},
					title: vid.title,
					viewCount: vid.viewer_count,
					videoId: vid.id,
				};
			});
			return data[0];
		} else {
			return streamer;
		}
	}

	static async fetchCategories(amtPerPage = 100, amtOfPages = 5) {
		function convertToSlug(Text) {
			return Text.toLowerCase()
				.replace(/[^\w ]+/g, "")
				.replace(/ +/g, "-");
		}
		const config = {
			params: {
				first: amtPerPage,
			},
			headers: {
				Authorization: `Bearer ${TWITCH_AUTH}`,
				"Client-Id": TWITCH_CLIENT_ID,
			},
		};
		let allData = [];
		for (let i = 0; i < amtOfPages; i++) {
			let result = await axios.get(TWITCH_CATEGORY_FETCH, config);
			console.log("1 Twitch Api Call");
			const data = result.data.data.map((game) => {
				return {
					label: game.name,
					value: convertToSlug(game.name),
					thumbnail: game.box_art_url,
					twitchId: game.id,
				};
			});
			allData = [...allData, ...data];
			config.params.after = result.data.pagination.cursor;
		}
		return allData;
	}
}

export { YTApi, TwitchApi };

TwitchApi.fetchCategories();
