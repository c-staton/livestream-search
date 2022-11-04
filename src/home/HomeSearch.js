import React from "react";
import SearchForm from "../common/SearchForm";
import GameFeed from "../stream-search/GameFeed";
import "./HomeSearch.css";

const HomeSearch = () => {
	return (
		<div className="stream-search">
			<div className="homepage__title">
				<span className="homepage__logo">
					<span id="livestreams">Livestream</span>Search
				</span>
				<p className="tagline">
					<span>Search Streams From&nbsp;</span>
					<span>
						<span id="both"> Both</span> <span id="platforms">Platforms</span>
					</span>
				</p>
			</div>
			<div className="stream-search__block">
				<SearchForm />
			</div>
			<GameFeed />
		</div>
	);
};

export default HomeSearch;
