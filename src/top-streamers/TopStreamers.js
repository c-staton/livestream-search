import React, { useEffect, useState } from "react";
import StreamFeed from "../common/StreamFeed";
import OfflineStreamers from "./OfflineStreamers";
import streamersList from "./TopStreamersList";
import HighlightStream from "./HighlightStream";
import { TwitchApi, InvidiousApi } from "../common/Api";
import loadingAnimation from "../common/Loading";
import "./styles/TopStreamer.css";
import "../common/styles/Loading.css";

const TopStreamers = () => {
	const [liveStreams, setLiveStreams] = useState([]);
	const [highlightStream, setHighlightStream] = useState([]);
	const [offlineStreamers, setOfflineStreamers] = useState([]);

	const randomSort = (a, b) => {
		const randomNum = Math.floor(Math.random() * 2); //random number, either 0 or 1
		if (randomNum === 0) {
			return 1;
		} else {
			return -1;
		}
	};

	const sortByABC = (a, b) => {
		if (a.channelName.toUpperCase() < b.channelName.toUpperCase()) {
			return -1;
		}
		if (a.channelName > b.channelName) {
			return 1;
		}
		return 0;
	};

	useEffect(() => {
		const verifiedStreamers = async (listOfStreamers) => {
			const verifiedList = await Promise.all(
				streamersList.map(async (streamer) => {
					if (streamer.platform === "youtube") {
						return await InvidiousApi.isLive(streamer);
					} else {
						return await TwitchApi.isLive(streamer);
					}
				})
			);
			const live = [];
			const notLive = [];

			for (let streamer of verifiedList) {
				if (streamer.videoId !== "") {
					live.push(streamer);
				} else {
					notLive.push(streamer);
				}
			}
			const sortedLives = live.sort(randomSort);

			if (sortedLives.length > 0) {
				const highlight = sortedLives.shift();
				console.log(highlight);
				setHighlightStream([highlight]);
			}
			if (sortedLives.length > 0) {
				setLiveStreams(sortedLives);
			}
			setOfflineStreamers(notLive.sort(sortByABC));
		};

		verifiedStreamers(streamersList);
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
				<div className="top-streamers__content">{loadingAnimation}</div>
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
