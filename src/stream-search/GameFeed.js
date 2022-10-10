import React from "react";
import GameCard from "./GameCard";
import "./styles/GameFeed.css";

const GameFeed = ({ games }) => {
	return (
		<div className="game-feed">
			{games.map((game) => (
				<GameCard
					name={game.label}
					slug={game.value}
					thumbnail={game.thumbnail}
				/>
			))}
		</div>
	);
};

export default GameFeed;
