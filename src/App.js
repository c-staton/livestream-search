import React, { useEffect } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import StreamSearch from "./stream-search/StreamSearch";
import TopStreamers from "./top-streamers/TopStreamers";
import NavBar from "./nav/NavBar";
import RequestForm from "./request/RequestForm";
import "./App.css";
import ReactGA from "react-ga";
import { useMediaQuery } from "react-responsive";
import NavBarMobile from "./nav/NavBarMobile";
import HomeSearch from "./home/HomeSearch";

const TRACKING_ID = "UA-245661443-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
	const isDesktop = useMediaQuery({
		query: "(min-width: 1070px)",
	});
	const isMobile = useMediaQuery({
		query: "(max-width: 1069px)",
	});

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				{isDesktop && <NavBar />}
				{isMobile && <NavBarMobile />}
				<Routes>
					<Route exact path="/" element={<HomeSearch />} />
					<Route exact path="/request" element={<RequestForm />} />
					<Route exact path="/search" element={<StreamSearch />} />
					<Route exact path="/top-streamers" element={<TopStreamers />} />
					<Route exact path={"/search/:game"} element={<StreamSearch />} />
					<Route exact path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
