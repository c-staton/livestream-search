import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import StreamSearch from "./stream-search/StreamSearch";
import TopStreamers from "./top-streamers/TopStreamers";
import NavBar from "./common/NavBar";
import HomePage from "./home/HomePage";
import RequestForm from "./request/RequestForm";
import gameList from "./common/GameList";
import "./App.css";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-245661443-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/request" element={<RequestForm />} />
				<Route
					exact
					path="/search"
					element={<StreamSearch heading={"Search by Category"} />}
				/>
				<Route exact path="/top-streamers" element={<TopStreamers />} />
				{gameList.map((game) => (
					<Route
						key={game.value}
						exact
						path={"/search/" + game.value}
						element={
							<StreamSearch
								heading={`Search by ${game.label}`}
								initial={game.label}
							/>
						}
					/>
				))}
				<Route exact path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</div>
	);
}

export default App;
