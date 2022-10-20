import React, { useEffect, useState } from "react";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import Select from "react-select";
import gameList from "./GameList";
import Random from "./Random";
import "./styles/SearchForm.css";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ setInitial, defaultValue }) => {
	const game = gameList.filter((game) => game.label === defaultValue);
	const [searchTerm, setSearchTerm] = useState(game[0]);
	const [randomStream, setRandomStream] = useState("");
	const [clicks, setClicks] = useState(0);

	const navigate = useNavigate();
	const gaEventTracker = useAnalyticsEventTracker("Search Form");

	useEffect(() => {
		async function callRandom() {
			try {
				const link = await Random.getStreamLink(searchTerm);
				setRandomStream(link);
			} catch (err) {}
		}
		callRandom();
	}, [clicks]);

	const handleChange = async (e) => {
		try {
			setSearchTerm(e);
			const link = await Random.getStreamLink(e);
			setRandomStream(link);
		} catch (err) {}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (setInitial) {
			setInitial(searchTerm.label);
		}
		navigate(`/search/${searchTerm.value}`);
	};

	let styles = {
		input: (provided) => ({
			...provided,
			fontWeight: "bold",
			fontSize: "30px",
			color: "black",
			padding: "10px",
		}),
		menuList: (provided) => ({
			...provided,
			color: "red",
		}),
		indicatorSeparator: (provided) => ({
			...provided,
			display: "none",
		}),
		dropdownIndicator: (provided) => ({
			...provided,
			color: "black",
		}),
		placeholder: (provided) => ({
			...provided,
			fontWeight: "bold",
			color: "black",
			fontSize: "30px",
			padding: "10px",
		}),
		control: (provided) => ({
			...provided,
			borderRadius: "10px",
			margin: "0px -3.5px",
			borderColor: "#f76c82",
			borderWidth: "3px",
		}),
		option: (provided, state) => ({
			...provided,
			fontWeight: state.isSelected ? "bold" : "normal",
			color: "black",
			backgroundColor: state.data.color,
			fontSize: "state.selectProps.myFontSize",
		}),
		singleValue: (provided) => ({
			...provided,
			color: "black",
			fontWeight: "bold",
			fontSize: "30px",
			padding: "10px",
		}),
	};

	return (
		<form name="post" onSubmit={handleSubmit} className="search-form">
			<Select
				name="term"
				id="term"
				onChange={handleChange}
				className="search-form__input"
				styles={styles}
				placeholder={defaultValue || "Select a category..."}
				options={gameList}
			/>
			<div className="btns-wrapper">
				<button
					className="search-btn"
					onClick={() => gaEventTracker("Livestream Search")}
				>
					Livestream Search
				</button>
				<a
					href={randomStream}
					target="_blank"
					rel="noopener noreferrer"
					onClick={() => {
						setClicks(clicks + 1);
						gaEventTracker(`Feeling Lucky (${searchTerm})`);
					}}
					className="search-btn"
				>
					I'm Feeling Lucky
				</a>
			</div>
		</form>
	);
};

export default SearchForm;
