import axios from "axios";

const BASE_URL = "http://api.livestreamsearch.com";

class LiveStreamSearch {
	static async apiCall(apiURL, params) {
		try {
			const config = {
				params,
			};
			const result = await axios.get(apiURL, config);
			return result;
		} catch (err) {
			console.log(err);
		}
	}
	static async searchLives(searchTerm) {
		try {
			const params = {
				category: searchTerm,
			};
			const result = await this.apiCall(`${BASE_URL}/search`, params);
			return result;
		} catch (err) {
			console.log(err);
		}
	}

	static async isTopLive() {
		try {
			const result = await this.apiCall(`${BASE_URL}/streamers`, {});
			return result;
		} catch (err) {
			console.log(err);
		}
	}

	static async randomStream() {
		try {
			const result = await this.apiCall(`${BASE_URL}/random`, {});
			return result;
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

export default LiveStreamSearch;
