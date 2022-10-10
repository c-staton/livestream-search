import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gameList from "../common/GameList";
import { TwitchApi, YTApi } from "../common/Api";

const Random = () => {
	let navigate = useNavigate();

	const randomNum = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const getRandLive = async (searchLives, randCategory) => {
		let result = await searchLives(randCategory, false);
		const randIdx = randomNum(0, result.length - 1);
		return result[randIdx];
	};

	const searchPlatform = async () => {
		// const platform = randomNum(0, 1) === 1 ? "youtube" : "twitch"; //50:50 odds for youtube or twitch
		const platform = "twitch";
		const randCategory = gameList[randomNum(0, gameList.length - 1)]; //Choose random category from GameList
		let link;

		if (platform === "youtube") {
			const { videoId } = await getRandLive(
				YTApi.searchLives,
				randCategory.label
			);
			link = `https://www.youtube.com/watch?v=${videoId}`;
		} else {
			const { channelId } = await getRandLive(
				TwitchApi.searchLives,
				randCategory.label
			);
			link = `https://www.twitch.tv/${channelId}`;
		}
		window.open(
			link,
			"_blank" // <- This is what makes it open in a new window.
		);
		navigate("/");
	};

	useEffect(() => {
		searchPlatform();
	}, []);
};

export default Random;
