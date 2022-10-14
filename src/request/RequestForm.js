import React, { useState } from "react";
import "./RequestForm.css";

const RequestForm = () => {
	const [val, setValue] = useState("");
	const [platform, setPlatform] = useState("youtube");

	const handleChange = (evt, setState) => {
		setState(evt.target.value);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		alert(`Streamer: ${val} Platform: ${platform}`);
	};

	return (
		<div className="request">
			<div className="request__content">
				<h1>Streamer Request</h1>
				<h4>Request a streamer to be added to the Top Streamers list</h4>
				<form className="request__form" onSubmit={handleSubmit}>
					<div className="form__option">
						<label htmlFor="name">Channel Name:</label>
						<input
							name="name"
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
						>
							<option value="youtube">YouTube</option>
							<option value="twitch">Twitch</option>
						</select>
					</div>
					<div className="submit">
						<button>Request</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RequestForm;
