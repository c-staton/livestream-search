import React, { useEffect, useState } from "react";
import StreamFeed from "../common/StreamFeed";
import OfflineStreamers from "./OfflineStreamers";
import HighlightStream from "./HighlightStream";
import LoadingAnimation from "../common/LoadingAnimation";
import "./styles/TopStreamer.css";
import "../common/styles/Loading.css";
import LSSearch from "../common/Api";

const TopStreamers = () => {
	const [liveStreams, setLiveStreams] = useState([]);
	const [highlightStream, setHighlightStream] = useState([]);
	const [offlineStreamers, setOfflineStreamers] = useState([]);

	useEffect(() => {
		const verifiedStreamers = async () => {
			try {
				const result = await LSSearch.isTopLive();
				if (result.highlight.length > 0) {
					setHighlightStream(result.highlight);
				}
				if (result.liveStreams.length > 0) {
					setLiveStreams(result.liveStreams);
				}
				if (result.offline.length > 0) {
					setOfflineStreamers(result.offline);
				}
			} catch (err) {
				console.log(err);
			}
		};
		verifiedStreamers();
	}, []);

	let highlightIsLive = (
		<>
			<HighlightStream stream={highlightStream[0]} />
			<StreamFeed streams={liveStreams} />
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

	if (offlineStreamers.length === 0) {
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
					{highlightStream.length > 0 ? highlightIsLive : highlightNotLive}
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
