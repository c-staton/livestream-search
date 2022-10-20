import React, { useEffect } from "react";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import { useLocation } from "react-router";
import LSSearch from "./Api";
import StreamCard from "./StreamCard";
import "./styles/StreamFeed.css";

const StreamFeed = ({ streams, sortBy, setSortBy }) => {
	const location = useLocation();
	const pathname = location.pathname;
	const gaEventTracker = useAnalyticsEventTracker("Stream Sort");

	const handleChange = (e) => {
		setSortBy(e.target.value);
		gaEventTracker(`Stream Sort By: ${e.target.value}`);
		if (e.target.value === "viewers") {
			streams.sort(LSSearch.viewersSort);
		}
		if (e.target.value === "alphabetical") {
			streams.sort(LSSearch.alphabetSort);
		}
		if (e.target.value === "random") {
			streams.sort(LSSearch.randomSort);
		}
	};

	useEffect(() => {}, [sortBy]);

	let sortBySelect = (
		<div className="sort-by">
			<label>Sort By: </label>
			<select name="sort" id="sort" onChange={handleChange} value={sortBy}>
				<option value="viewers">Viewers</option>
				<option value="alphabetical">A-Z</option>
				<option value="random">Random</option>
			</select>
		</div>
	);

	return (
		<>
			{pathname !== "/top-streamers" ? sortBySelect : <br />}

			<div className="stream-feed">
				{streams &&
					streams.map((vid) => (
						<StreamCard
							key={vid.streamId}
							channelName={vid.channelName}
							channelId={vid.channelId}
							platform={vid.platform}
							title={vid.title}
							streamId={vid.streamId}
							thumbnail={vid.thumbnail}
							viewers={vid.viewers}
						/>
					))}
				{!streams && <p>Error: no data, try reloading</p>}
			</div>
		</>
	);
};

export default StreamFeed;
