import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Random from "./Random";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import "./styles/NavBar.css";
import diceIcon from "../icons/dice.png";
import search from "../icons/search.png";

const NavBar = () => {
	const [randomStream, setRandomStream] = useState("");
	const [clicks, setClicks] = useState(0);
	const gaEventTracker = useAnalyticsEventTracker("Nav Bar");

	useEffect(() => {
		async function callRandom() {
			const link = await Random.getStreamLink();
			setRandomStream(link);
		}
		callRandom();
	}, [clicks]);

	return (
		<nav className="nav-bar">
			<div className="nav-bar__contents">
				<div className="nav-bar__logo">
					<a href="/" className="nav-bar-__logo--link">
						<img src={search} width="20px" id="live-sym" alt="" />
						<span id="nav-bar__logo--live">Livestream</span>
						<span id="nav-bar__logo--search">Search</span>
					</a>
				</div>
				<div className="nav-bar__links">
					<NavLink to={"/search"}>Stream Search</NavLink>
					<NavLink end to="/top-streamers">
						Top Streamers
					</NavLink>
				</div>
				<div className="nav-bar__random">
					<a
						href={randomStream}
						target="_blank"
						rel="noopener noreferrer"
						onClick={() => {
							setClicks(clicks + 1);
							gaEventTracker("watch random stream");
						}}
					>
						<img
							src={diceIcon}
							alt="feeling lucky?"
							width="40px"
							className="nav-bar__random--img"
						/>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
