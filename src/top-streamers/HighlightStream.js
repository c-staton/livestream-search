import React from "react";
import "./styles/HighlightStream.css";
import TopStreamInfo from "./TopStreamInfo";

const HighlightStream = ({ stream }) => {
	let streamEmbed;
	if (stream.platform === "youtube") {
		streamEmbed = (
			<iframe
				title={stream.title}
				src={`https://www.youtube.com/embed/${stream.streamId}?autoplay=1&mute=1&enablejsapi=1`}
			></iframe>
		);
	} else {
		streamEmbed = (
			<iframe
				title={stream.title}
				src={`https://player.twitch.tv/?channel=${stream.channelId}&parent=${window.location.hostname}`}
			></iframe>
		);
	}
	return (
		<div className="highlight">
			<h1 className="highlight__title">
				<span>Top Streamers&nbsp;</span>
				<span>
					<span id="live">Live</span> Right Now
				</span>
			</h1>
			<div className="highlight__embed">
				{streamEmbed}
				<TopStreamInfo
					title={stream.title}
					platform={stream.platform}
					streamId={stream.streamId}
					channelId={stream.channelId}
					channelName={stream.channelName}
				/>
			</div>
		</div>
	);
};

export default HighlightStream;
