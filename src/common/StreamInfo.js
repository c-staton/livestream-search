import React from "react";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import approximateNumber from "approximate-number";
import "./styles/StreamInfo.css";
import userIcon from "../icons/user.png";

const StreamInfo = ({
	channelName,
	channelId,
	platform,
	title,
	streamId,
	viewers,
}) => {
	const gaEventTracker = useAnalyticsEventTracker("Livestream Card");
	return (
		<div className="stream-info">
			<h1 className="stream-info__title">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={
						platform === "youtube"
							? `https://www.youtube.com/watch?v=${streamId}`
							: `https://www.twitch.tv/${channelId}`
					}
					onClick={() => gaEventTracker(`Visit ${channelName} (live)`)}
					title={title}
				>
					{title}
				</a>
			</h1>
			<div className="stream-info__data">
				<div className="stream-info__data--creator">
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
							title={channelName}
						>
							{channelName}
						</a>
					</p>
				</div>
				<div className="stream-info__data--creator">
					<img
						src={userIcon}
						alt="view count"
						width="14px"
						className="viewer"
					/>
					<p title={`${approximateNumber(viewers)} Concurrent Viewers`}>
						{approximateNumber(viewers)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default StreamInfo;
