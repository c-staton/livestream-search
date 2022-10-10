import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { YTApi, TwitchApi } from "../common/Api";
import SearchForm from "../common/SearchForm";
import StreamFeed from "../common/StreamFeed";
import GameFeed from "./GameFeed";
import gameList from "../common/GameList";
import "./styles/StreamSearch.css";

const StreamSearch = ({ heading, initial = "" }) => {
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
		let result = await YTApi.searchLives(searchTerm);
		return result;
	};

	const callTwitch = async (searchTerm) => {
		let result = await TwitchApi.searchLives(searchTerm);
		return result;
	};

	const searchPlatforms = async (searchTerm) => {
		const ytResults = await callYoutube(searchTerm);
		const twitchResults = await callTwitch(searchTerm);
		const allStreams = [...ytResults, ...twitchResults].sort(compare);
		setStreams(allStreams);
	};

	const compare = (a, b) => {
		if (a.viewCount < b.viewCount) {
			return 1;
		}
		if (a.viewCount > b.viewCount) {
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

	return (
		<div className="stream-search">
			<h1 className="stream-search__title">{heading}</h1>
			<SearchForm setInitial={setInitialSearch} />
			{feed}
		</div>
	);
};

export default StreamSearch;
