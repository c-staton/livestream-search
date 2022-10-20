import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/NavBarMobile.css";

const NavBarMobile = () => {
	return (
		<nav className="navbar-mobile">
			<div className="navbar-mobile__contents">
				<NavLink to={"/search"}>Stream Search</NavLink>
				<NavLink end to="/top-streamers">
					Top Streamers
				</NavLink>
			</div>
		</nav>
	);
};

export default NavBarMobile;
