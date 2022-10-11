import React from "react";
import "./RequestForm.css";

const RequestForm = () => {
	return (
		<div className="request">
			<div className="request__content">
				<h1>Streamer Request</h1>
				<h4>Request a streamer to be added to the Top Streamers list</h4>
				<form className="request__form">
					<div className="form__option">
						<label htmlFor="name">Channel Name:</label>
						<input name="name" />
					</div>
					<div className="form__option">
						<label htmlFor="platform">Platform:</label>
						<select name="platform" id="platform">
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
