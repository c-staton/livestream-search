import React from "react";
import StreamCard from "./StreamCard";
import "./styles/StreamFeed.css";

const StreamFeed = ({ streams }) => {
	return (
		<div className="stream-feed">
			{streams.map((vid) => (
				<StreamCard
					key={vid.videoId}
					title={vid.title}
					creator={vid.channelName}
					thumbnail={vid.thumbnails}
					videoId={vid.videoId}
					channelId={vid.channelId}
					viewCount={vid.viewCount}
					platform={vid.platform}
				/>
			))}
		</div>
	);
};

export default StreamFeed;
