import React from "react";
import StreamInfo from "./StreamInfo";
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
