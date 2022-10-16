import React from "react";
import StreamInfo from "./StreamInfo";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import "./styles/StreamCard.css";
import TopStreamInfo from "../top-streamers/TopStreamInfo";

const StreamCard = ({
	channelName,
	channelId,
	platform,
	title,
	streamId,
	thumbnail,
	viewers,
}) => {
	const gaEventTracker = useAnalyticsEventTracker("Livestream Card");

	let streamInfo = (
		<StreamInfo
			channelName={channelName}
			channelId={channelId}
			platform={platform}
			title={title}
			streamId={streamId}
			viewers={viewers}
		/>
	);

	let topStreamInfo = (
		<TopStreamInfo
			channelName={channelName}
			channelId={channelId}
			platform={platform}
			title={title}
			streamId={streamId}
		/>
	);

	return (
		<div className="stream-card">
			<div className="shrink">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={
						platform === "youtube"
							? `https://www.youtube.com/watch?v=${streamId}`
							: `https://www.twitch.tv/${channelId}`
					}
					onClick={() => gaEventTracker(`Visit ${channelName} (live)`)}
				>
					<img src={thumbnail} alt={title} className="thumbnail" />
				</a>
			</div>
			{viewers ? streamInfo : topStreamInfo}
		</div>
	);
};

export default StreamCard;
