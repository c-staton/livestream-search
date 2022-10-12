import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TwitchApi, YoutubeApi } from "../common/Api";
import SearchForm from "../common/SearchForm";
import StreamFeed from "../common/StreamFeed";
import GameFeed from "./GameFeed";
import gameList from "../common/GameList";
import "./styles/StreamSearch.css";
import loadingAnimation from "../common/Loading";

const StreamSearch = ({ initial = "" }) => {
	const [streams, setStreams] = useState([]);
	const [initialSearch, setInitialSearch] = useState(initial);

	const location = useLocation();
	const pathname = location.pathname;

	//if inital search then on render searchPlatforms
	useEffect(() => {
		if (initial !== "") {
			searchPlatforms(initialSearch);
		}
	}, [initialSearch]);

	const callYoutube = async (searchTerm) => {
		let result = await YoutubeApi.searchLives(searchTerm, true);
		return result;
	};

	const callTwitch = async (searchTerm) => {
		let result = await TwitchApi.searchLives(searchTerm, true);
		return result;
	};

	const searchPlatforms = async (searchTerm) => {
		const ytResults = await callYoutube(searchTerm);
		const twitchResults = await callTwitch(searchTerm);
		let allStreams = [...ytResults, ...twitchResults];
		allStreams = allStreams.sort(compare);
		setStreams(allStreams);
	};

	// const randomSort = (a, b) => {
	// 	const randomNum = Math.floor(Math.random() * 2); //random number, either 0 or 1
	// 	if (randomNum === 0) {
	// 		return 1;
	// 	} else {
	// 		return -1;
	// 	}
	// };

	const compare = (a, b) => {
		if (a.followerCount < b.followerCount) {
			return 1;
		}
		if (a.followerCount > b.followerCount) {
			return -1;
		}
		return 0;
	};

	let feed;
	if (pathname === "/search") {
		feed = <GameFeed games={gameList} />;
	} else {
		feed = <StreamFeed streams={streams} />;
	}

	if (streams.length === 0 && pathname !== "/search") {
		return (
			<div className="stream-search">
				<div className="stream-search__content">
					<div className="stream-search__block">
						<SearchForm setInitial={setInitialSearch} resetState={setStreams} />
					</div>
					{loadingAnimation}
				</div>
			</div>
		);
	}
	return (
		<div className="stream-search">
			<div className="stream-search__content">
				<div className="stream-search__block">
					<SearchForm setInitial={setInitialSearch} resetState={setStreams} />
				</div>

				{feed}
			</div>
		</div>
	);
};

export default StreamSearch;
