import React from "react";
import "./HomePage.css";
import LoadingAnimation from "../common/LoadingAnimation";
import SearchForm from "../common/SearchForm";
import { useMediaQuery } from "react-responsive";

const HomePage = () => {
	const isDesktop = useMediaQuery({
		query: "(min-width: 1070px)",
	});
	const isMobile = useMediaQuery({
		query: "(max-width: 1069px)",
	});

	return (
		<div className="homepage">
			<div className="homepage__middle">
				<div className="homepage__text">
					{isDesktop && (
						<span>
							<span id="livestreams">Livestream</span>Search
						</span>
					)}
					{isMobile && (
						<>
							<span id="livestreams">Livestream</span>
							<span>Search</span>
						</>
					)}
				</div>
				<p className="tagline wavy">
					*search streams from <span id="both">both</span>{" "}
					<span id="platforms">platforms</span>*
				</p>
				<SearchForm />
				<div style={{ display: "none" }}>
					<LoadingAnimation />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
