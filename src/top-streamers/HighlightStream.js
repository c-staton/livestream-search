import React from "react";
import "./styles/HighlightStream.css";
import StreamInfo from "../common/StreamInfo";

const HighlightStream = ({ stream }) => {
	let streamEmbed;
	if (stream.platform === "youtube") {
		streamEmbed = (
			<iframe
				title={stream.title}
				src={`https://www.youtube.com/embed/${stream.videoId}?autoplay=1&mute=1&enablejsapi=1`}
			></iframe>
		);
	} else {
		streamEmbed = (
			<iframe
				title={stream.title}
				src={`https://player.twitch.tv/?channel=${stream.channelId}&parent=localhost`}
			></iframe>
		);
	}
	return (
		<div className="highlight">
			<h1 className="highlight__title">
				Top Streamers <span id="live">Live</span> Right Now
			</h1>
			<div className="highlight__embed">
				{streamEmbed}
				<StreamInfo
					title={stream.title}
					platform={stream.platform}
					videoId={stream.videoId}
					channelId={stream.channelId}
					creator={stream.channelName}
					viewCount={stream.viewCount}
				/>
			</div>
		</div>
	);
};

export default HighlightStream;
