import React from "react";
import StreamCard from "./StreamCard";
import "./styles/StreamFeed.css";

const StreamFeed = ({ streams }) => {
	return (
		<div className="stream-feed">
			{streams.map((vid) => (
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
		</div>
	);
};

export default StreamFeed;
