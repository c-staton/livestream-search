import React, { useState } from "react";
import "./RequestForm.css";

const RequestForm = () => {
	const [val, setValue] = useState("");
	const [platform, setPlatform] = useState("youtube");

	const handleChange = (evt, setState) => {
		setState(evt.target.value);
	};

	return (
		<div className="request">
			<div className="request__content">
				<h1>Streamer Request</h1>
				<h4>Request a streamer to be added to the Top Streamers list</h4>
				<form
					name="request"
					method="post"
					data-netlify="true"
					className="request__form"
				>
					<input type="hidden" name="form-name" value="request" />
					<div className="form__option">
						<label htmlFor="name">Channel Name:</label>
						<input
							name="name"
							type="text"
							value={val}
							onChange={(e) => handleChange(e, setValue)}
						/>
					</div>
					<div className="form__option">
						<label htmlFor="platform">Platform:</label>
						<select
							name="platform"
							id="platform"
							onChange={(e) => handleChange(e, setPlatform)}
							value={platform}
						>
							<option value="youtube">YouTube</option>
							<option value="twitch">Twitch</option>
						</select>
					</div>
					<div className="submit">
						<button type="submit">Request</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RequestForm;
