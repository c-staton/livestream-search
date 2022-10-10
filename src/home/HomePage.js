import React from "react";
import "./HomePage.css";
import SearchForm from "../common/SearchForm";

const HomePage = () => {
	return (
		<div className="homepage">
			<div className="homepage__middle">
				<div className="homepage__text">
					<span>
						<span id="livestreams">Livestream</span>Search
					</span>
				</div>
				<p className="tagline wavy">
					*search streams from <span id="both">both</span>{" "}
					<span id="platforms">platforms</span>*
				</p>
				<SearchForm />
			</div>
		</div>
	);
};

export default HomePage;
