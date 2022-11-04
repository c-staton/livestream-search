import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useAnalyticsEventTracker from "../common/useAnalyticsEventTracker";
import "./styles/NavBar.css";
import diceIcon from "../icons/dice.png";
import { useDispatch, useSelector } from "react-redux";
import { getRandomStream, addClick } from "../features/random/randomSlice";

const NavBar = () => {
	const gaEventTracker = useAnalyticsEventTracker("Nav Bar");

	const dispatch = useDispatch();
	const { streamLink, btnClicks } = useSelector((store) => store.random);

	useEffect(() => {
		dispatch(getRandomStream());
	}, [btnClicks]);

	return (
		<nav className="nav-bar">
			<div className="nav-bar__contents">
				<div className="nav-bar__links">
					<NavLink end to={"/"}>
						Stream Search
					</NavLink>
					<NavLink end to="/top-streamers">
						Top Streamers
					</NavLink>
				</div>
				<div className="nav-bar__random">
					<a
						href={streamLink}
						target="_blank"
						rel="noopener noreferrer"
						onClick={() => {
							dispatch(addClick());
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
