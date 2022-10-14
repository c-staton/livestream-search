import React from "react";
import StreamInfo from "./StreamInfo";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import "./styles/StreamCard.css";

const StreamCard = ({
	title,
	creator,
	thumbnail,
	videoId,
	channelId,
	viewCount,
	platform,
}) => {
	const gaEventTracker = useAnalyticsEventTracker("Livestream Card");
	return (
		<div className="stream-card">
			<div className="shrink">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={
						platform === "youtube"
							? `https://www.youtube.com/watch?v=${videoId}`
							: `https://www.twitch.tv/${channelId}`
					}
					onClick={() => gaEventTracker(`Visit ${creator} (live)`)}
				>
					<img src={thumbnail.url} alt={title} className="thumbnail" />
				</a>
			</div>
			<StreamInfo
				title={title}
				platform={platform}
				videoId={videoId}
				channelId={channelId}
				creator={creator}
				viewCount={viewCount}
			/>
		</div>
	);
};

export default StreamCard;
