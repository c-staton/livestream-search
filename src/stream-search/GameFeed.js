import React from "react";
import GameCard from "./GameCard";
import "./styles/GameFeed.css";

const GameFeed = ({ games }) => {
	return (
		<div className="game-feed">
			{games.map((game) => (
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
