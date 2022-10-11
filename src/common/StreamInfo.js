import React from "react";
import "./styles/StreamInfo.css";
import liveIcon from "../icons/live.png";

const StreamInfo = ({ title, platform, channelId, videoId, creator }) => {
	return (
		<div className="stream-info">
			<div className="stream-info__data">
				<div className="stream-info__data--creator">
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
						>
							{creator}
						</a>
					</p>
				</div>
			</div>
			<h1 className="stream-info__title">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={
						platform === "youtube"
							? `https://www.youtube.com/watch?v=${videoId}`
							: `https://www.twitch.tv/${channelId}`
					}
				>
					{title}
				</a>
			</h1>
		</div>
	);
};

export default StreamInfo;
