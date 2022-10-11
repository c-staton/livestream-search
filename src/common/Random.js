import gameList from "./GameList";
import { TwitchApi, InvidiousApi } from "./Api";

class Random {
	static randomNum(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	static async getRandLive(searchLives, randCategory) {
		try {
			let result = await searchLives(randCategory, false);
			const randIdx = this.randomNum(0, result.length - 1);
			return result[randIdx];
		} catch (err) {
			console.log(err);
		}
	}

	static async getStreamLink(category = "") {
		try {
			const platform = this.randomNum(0, 1) === 1 ? "youtube" : "twitch"; //50:50 odds for youtube or twitch

			let randCategory;
			if (category === "") {
				randCategory = gameList[this.randomNum(0, gameList.length - 1)].label; //Choose random category from GameList
			} else {
				randCategory = category;
			}

			let link;

			if (platform === "youtube") {
				const { videoId } = await this.getRandLive(
					InvidiousApi.searchLives,
					randCategory
				);
				link = `https://www.youtube.com/watch?v=${videoId}`;
			} else {
				const { channelId } = await this.getRandLive(
					TwitchApi.searchLives,
					randCategory
				);
				link = `https://www.twitch.tv/${channelId}`;
			}
			return link;
		} catch (err) {
			console.log(err);
		}
	}
}

export default Random;
