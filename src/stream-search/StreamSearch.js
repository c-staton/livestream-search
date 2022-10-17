import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LSSearch from "../common/Api";
import SearchForm from "../common/SearchForm";
import StreamFeed from "../common/StreamFeed";
import GameFeed from "./GameFeed";
import gameList from "../common/GameList";
import "./styles/StreamSearch.css";
import loadingAnimation from "../common/Loading";

const StreamSearch = ({ initial = "" }) => {
	const [streams, setStreams] = useState([]);
	const [initialSearch, setInitialSearch] = useState(initial);
	const [sortBy, setSortBy] = useState("viewers");

	const location = useLocation();
	const pathname = location.pathname;

	//if inital search then on render searchPlatforms
	useEffect(() => {
		if (initial !== "") {
			searchPlatforms(initialSearch);
		}
	}, [initialSearch]);

	const searchPlatforms = async (searchTerm) => {
		const allStreams = await LSSearch.searchLives(searchTerm);
		setStreams(allStreams);
		setSortBy("viewers");
	};

	if (streams.length === 0 && pathname !== "/search") {
		return (
			<div className="stream-search">
				<div className="stream-search__content">
					<div className="stream-search__block">
						<SearchForm
							setInitial={setInitialSearch}
							defaultValue={initialSearch}
						/>
					</div>
					{loadingAnimation}
				</div>
			</div>
		);
	}
	if (pathname === "/search") {
		return (
			<div className="stream-search">
				<div className="stream-search__content">
					<div className="stream-search__block">
						<SearchForm
							setInitial={setInitialSearch}
							defaultValue={"Select a category..."}
						/>
					</div>
					<GameFeed games={gameList} />
				</div>
			</div>
		);
	}
	return (
		<div className="stream-search">
			<div className="stream-search__content">
				<div className="stream-search__block">
					<SearchForm
						setInitial={setInitialSearch}
						defaultValue={initialSearch}
					/>
				</div>
				<StreamFeed streams={streams} sortBy={sortBy} setSortBy={setSortBy} />
			</div>
		</div>
	);
};

export default StreamSearch;
