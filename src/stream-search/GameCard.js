import React from "react";
import "./styles/GameCard.css";

const GameCard = ({ name, slug, thumbnail }) => {
	let sizedThumbnail = thumbnail.replace("{width}x{height}", "285x380");
	return (
		<div className="game-card shrink">
			<a href={`/search/${slug}`}>
				<img src={sizedThumbnail} className="game-card__img" alt={name} />
			</a>
			<p className="game-card__title">
				<a href={`/search/${slug}`}>{name}</a>
			</p>
		</div>
	);
};

export default GameCard;
