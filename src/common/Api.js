import axios from "axios";

const INVIDIOUS_BASE_URL = "https://vid.puffyan.us/api/v1";
const TWITCH_LIVE_SEARCH = "https://api.twitch.tv/helix/search/channels";
const TWITCH_VIEWS_SEARCH = "https://api.twitch.tv/helix/streams";
const TWITCH_FOLLOWERS_SEARCH = "https://api.twitch.tv/helix/users/follows";
const TWITCH_CATEGORY_FETCH = "https://api.twitch.tv/helix/games/top";
const TWITCH_AUTH = process.env.REACT_APP_TWITCH_AUTH;
const TWITCH_CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID;

class TwitchApi {
	static async searchLives(searchTerm, needSubs = true) {
		try {
			const config = {
				params: {
					query: searchTerm,
					live_only: "true",
					first: "20",
				},
				headers: {
					Authorization: `Bearer ${TWITCH_AUTH}`,
					"Client-Id": TWITCH_CLIENT_ID,
				},
			};

			const result = await axios.get(TWITCH_LIVE_SEARCH, config);
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

			if (needSubs) {
				data = await Promise.all(
					data.map(async (vid) => {
						return {
							...vid,
							followerCount: await this.getSubCount(vid.videoId),
						};
					})
				);
			}

			return data;
		} catch (err) {
			console.log(err);
		}
	}

	static async getSubCount(twitchId) {
		try {
			const config = {
				params: {
					to_id: twitchId,
					first: 1,
				},
				headers: {
					Authorization: `Bearer ${TWITCH_AUTH}`,
					"Client-Id": TWITCH_CLIENT_ID,
				},
			};

			const result = await axios.get(TWITCH_FOLLOWERS_SEARCH, config);
			let followerCount = result.data.total;
			return followerCount;
		} catch (err) {
			console.log(err);
		}
	}

	static async isLive(streamer) {
		try {
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

			if (result.data.data.length < 1) {
				return streamer;
			}

			const latestVid = result.data.data[0];
			if (result.data.data.length > 0) {
				const data = {
					channelId: latestVid.user_login,
					channelName: latestVid.user_name,
					platform: "twitch",
					thumbnails: {
						url: `https://static-cdn.jtvnw.net/previews-ttv/live_user_${latestVid.user_login}-320x180.jpg `,
					},
					title: latestVid.title,
					videoId: latestVid.id,
				};
				return data;
			} else {
				return streamer;
			}
		} catch (err) {
			console.log(err);
		}
	}

	static async fetchCategories(amtPerPage = 100, amtOfPages = 5) {
		try {
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
		} catch (err) {
			console.log(err);
		}
	}
}

class InvidiousApi {
	static async searchLives(searchTerm, needSubs = true) {
		try {
			const config = {
				params: {
					q: searchTerm,
					features: "live",
					type: "video",
					fields: "authorId,author,videoThumbnails,title,videoId,lengthSeconds",
				},
				headers: {
					Accept: "application/json",
				},
			};

			const result = await axios.get(`${INVIDIOUS_BASE_URL}/search`, config);
			let data = result.data.map((vid) => {
				return {
					channelId: vid.authorId,
					channelName: vid.author,
					platform: "youtube",
					thumbnails: { url: vid.videoThumbnails[0].url },
					title: vid.title,
					viewCount: 0,
					videoId: vid.videoId,
				};
			});

			if (needSubs) {
				data = await Promise.all(
					data.map(async (vid) => {
						return {
							...vid,
							followerCount: await this.getSubCount(vid.channelId),
						};
					})
				);
			}

			return data;
		} catch (err) {
			console.log(err);
		}
	}

	static async getSubCount(channelId) {
		try {
			const config = {
				params: {
					fields: "subCount",
				},
				headers: {
					Accept: "application/json",
				},
			};
			const result = await axios.get(
				`${INVIDIOUS_BASE_URL}/channels/${channelId}`,
				config
			);
			const subCount = result.data.subCount;
			return subCount;
		} catch (err) {
			console.log(err);
		}
	}

	static async isLive(streamer) {
		try {
			const config = {
				params: {
					continuation: "String",
					sort_by: "newest",
					max_results: 1,
					fields: "authorId,author,videoThumbnails,title,videoId,lengthSeconds",
				},
				headers: {
					Accept: "application/json",
				},
			};
			const result = await axios.get(
				`${INVIDIOUS_BASE_URL}/channels/latest/${streamer.channelId}`,
				config
			);

			if (result.data.length < 1) {
				return streamer;
			}

			const latestVid = result.data[0];
			const vidLength = latestVid.lengthSeconds; // if api says zero then it must be a livestream
			const thumbnailUrl = latestVid.videoThumbnails[0].url;
			if (vidLength === 0) {
				const data = {
					channelId: latestVid.authorId,
					channelName: latestVid.author,
					platform: "youtube",
					thumbnails: { url: thumbnailUrl },
					title: latestVid.title,
					viewCount: 0,
					videoId: latestVid.videoId,
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

export { TwitchApi, InvidiousApi };
