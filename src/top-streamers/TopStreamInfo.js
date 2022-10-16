import React from "react";
import useAnalyticsEventTracker from "../common/useAnalyticsEventTracker";
import "./styles/TopStreamInfo.css";
import liveIcon from "../icons/live.png";

const TopStreamInfo = ({
	channelName,
	channelId,
	platform,
	title,
	streamId,
}) => {
	const gaEventTracker = useAnalyticsEventTracker("Livestream Card");
	return (
		<div className="topstream-info">
			<div className="topstream-info__data">
				<div className="topstream-info__data--creator">
					<img src={liveIcon} alt="live" width="25px" />
					<p>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={
								platform === "youtube"
									? `https://www.youtube.com/channel/${channelId}`
									: `https://www.twitch.tv/${channelId}`
							}
							onClick={() => gaEventTracker(`Visit ${channelName} (live)`)}
						>
							{channelName}
						</a>
					</p>
				</div>
			</div>
			<h1 className="topstream-info__title">
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
					{title}
				</a>
			</h1>
		</div>
	);
};

export default TopStreamInfo;
