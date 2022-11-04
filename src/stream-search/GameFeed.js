import React from "react";
import GameCard from "./GameCard";
import "./styles/GameFeed.css";
import gameList from "../common/GameList";

const GameFeed = () => {
	return (
		<div className="game-feed">
			{gameList.map((game) => (
				<GameCard
					key={game.value}
					name={game.label}
					slug={game.value}
					thumbnail={game.thumbnail}
				/>
			))}
		</div>
	);
};

export default GameFeed;
