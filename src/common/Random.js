import gameList from "./GameList";
import LSSearch from "./Api";

class Random {
	static randomNum(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	static getRandElement(arr) {
		const randIdx = this.randomNum(0, arr.length - 1);
		return arr[randIdx];
	}

	static async getStreamLink(category = "") {
		try {
			const platform = this.randomNum(0, 1) === 1 ? "youtube" : "twitch"; //50:50 odds for youtube or twitch

			let randCategory;
			if (category === "") {
				randCategory = gameList[this.randomNum(0, gameList.length - 1)]; //Choose random category from GameList
			} else {
				randCategory = category;
			}

			let link;
			if (platform === "youtube") {
				const res = await LSSearch.getYtLiveIds(randCategory.label);
				const streamId = this.getRandElement(res);
				link = `https://www.youtube.com/watch?v=${streamId}`;
			} else {
				const res = await LSSearch.searchTwitch(randCategory.twitchId);
				const { channelId } = this.getRandElement(res);
				link = `https://www.twitch.tv/${channelId}`;
			}
			return link;
		} catch (err) {
			console.log(err);
		}
	}
}

export default Random;
