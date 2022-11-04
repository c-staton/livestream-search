import React, { useEffect } from "react";
import StreamFeed from "../common/StreamFeed";
import OfflineStreamers from "./OfflineStreamers";
import HighlightStream from "./HighlightStream";
import LoadingAnimation from "../common/LoadingAnimation";
import "./styles/TopStreamer.css";
import "../common/styles/Loading.css";
import { useDispatch, useSelector } from "react-redux";
import { getStreamersLive } from "../features/streams/streamsSlice";

const TopStreamers = () => {
	const dispatch = useDispatch();

	const { streams, highlightStream, offlineStreamers, isLoading } = useSelector(
		(store) => store.streams
	);

	useEffect(() => {
		dispatch(getStreamersLive());
	}, []);

	let highlightIsLive = (
		<>
			<HighlightStream stream={highlightStream} />
			<StreamFeed streams={streams} />
		</>
	);

	let highlightNotLive = (
		<p className="none-live">
			No one's live{" "}
			<span role="img" aria-label="dissapointed">
				😕
			</span>
		</p>
	);

	if (isLoading) {
		return (
			<div className="top-streamers">
				<div className="top-streamers__content">
					<LoadingAnimation />
				</div>
			</div>
		);
	} else {
		return (
			<div className="top-streamers">
				<div className="top-streamers__content">
					{highlightStream.channelName ? highlightIsLive : highlightNotLive}
					<div className="line"></div>
					<h1 className="top-streamers__content--header">Offline Streamers</h1>
					<OfflineStreamers streamers={offlineStreamers} />
					<div className="top-streamers__suggest">
						<p>
							<a href="/request">Are we missing someone?</a>
						</p>
					</div>
				</div>
			</div>
		);
	}
};

export default TopStreamers;
