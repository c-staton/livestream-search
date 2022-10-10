import React from "react";
import StreamerProfile from "./StreamerProfile";
import "./styles/OfflineStreamers.css";

const OfflineStreamers = ({ streamers }) => {
	return (
		<div className="offline-streamers">
			{streamers.map((streamer) => (
				<StreamerProfile key={streamer.channelId} data={streamer} />
			))}
		</div>
	);
};

export default OfflineStreamers;
