import React from "react";
import "./styles/HighlightStream.css";
import StreamInfo from "../common/StreamInfo";

const HighlightStream = ({ stream }) => {
	return (
		<div className="highlight">
			<h1 className="highlight__title">
				Top Streamers <span id="live">Live</span> Right Now
			</h1>
			<div className="highlight__embed">
				<iframe
					title={stream.title}
					src={`https://player.twitch.tv/?channel=${stream.channelId}&parent=localhost`}
				></iframe>
				<StreamInfo
					title={stream.title}
					platform={stream.platform}
					videoId={stream.videoId}
					channelId={stream.hannelId}
					creator={stream.channelName}
					viewCount={stream.viewCount}
				/>
			</div>
		</div>
	);
};

export default HighlightStream;
