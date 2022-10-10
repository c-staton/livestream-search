import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/NavBar.css";
import diceIcon from "../icons/dice.png";
import circle from "../icons/circle.png";

const NavBar = () => {
	return (
		<nav className="nav-bar">
			<div className="nav-bar__contents">
				<div className="nav-bar__logo">
					<a href="/" className="nav-bar-__logo--link">
						<img src={circle} width="25px" id="live-sym" alt="" />
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
					<a href="/random">
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
