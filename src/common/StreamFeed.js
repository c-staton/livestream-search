import React, { useEffect } from "react";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import { useLocation } from "react-router";
import StreamCard from "./StreamCard";
import "./styles/StreamFeed.css";
import { useDispatch, useSelector } from "react-redux";
import { sortStreams, resetSortBy } from "../features/streams/streamsSlice";

const StreamFeed = () => {
	const dispatch = useDispatch();
	const { streams, sortBy, isLoading } = useSelector((store) => store.streams);

	const location = useLocation();
	const pathname = location.pathname;
	const gaEventTracker = useAnalyticsEventTracker("Stream Sort");

	const handleChange = (e) => {
		dispatch(sortStreams(e.target.value));
		gaEventTracker(`Stream Sort By: ${e.target.value}`);
	};

	useEffect(() => {
		dispatch(resetSortBy());
	}, [isLoading]);

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
