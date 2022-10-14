import React from "react";
import useAnalyticsEventTracker from "../common/useAnalyticsEventTracker";
import "./styles/StreamerProfile.css";

const StreamerProfile = ({ data }) => {
	const gaEventTracker = useAnalyticsEventTracker("Streamer Profile");
	return (
		<div className="streamer-profile">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={
					data.platform === "youtube"
						? `https://www.youtube.com/channel/${data.channelId}`
						: `https://www.twitch.tv/${data.channelId}`
				}
				className="grow"
				onClick={() => gaEventTracker(`Visit ${data.channelName} (offline)`)}
			>
				<img
					src={data.profileImg}
					className="streamer-profile__pfp"
					alt={data.channelName}
				/>
			</a>

			<h1 className="streamer-profile__name">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={
						data.platform === "youtube"
							? `https://www.youtube.com/channel/${data.channelId}`
							: `https://www.twitch.tv/${data.channelId}`
					}
					onClick={() => gaEventTracker(`Visit ${data.channelName} (offline)`)}
				>
					{data.channelName}
				</a>
			</h1>
		</div>
	);
};

export default StreamerProfile;
