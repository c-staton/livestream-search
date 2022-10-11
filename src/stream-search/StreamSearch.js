import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TwitchApi, InvidiousApi } from "../common/Api";
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
		let result = await InvidiousApi.searchLives(searchTerm, true);
		return result;
	};

	const callTwitch = async (searchTerm) => {
		let result = await TwitchApi.searchLives(searchTerm, true);
		return result;
	};

	const searchPlatforms = async (searchTerm) => {
		const ytResults = await callYoutube(searchTerm);
		const twitchResults = await callTwitch(searchTerm);
		const allStreams = [...ytResults, ...twitchResults].sort(compare);
		setStreams(allStreams);
	};

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

	return (
		<div className="stream-search">
			<div className="stream-search__content">
				<div className="stream-search__block">
					<SearchForm setInitial={setInitialSearch} />
				</div>

				{feed}
			</div>
		</div>
	);
};

export default StreamSearch;
