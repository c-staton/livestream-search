import React, { useEffect, useState } from "react";
import Select from "react-select";
import gameList from "./GameList";
import Random from "./Random";
import "./styles/SearchForm.css";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ setInitial, resetState }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [randomStream, setRandomStream] = useState("");
	const [clicks, setClicks] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		async function callRandom() {
			const link = await Random.getStreamLink(searchTerm.label);
			setRandomStream(link);
		}
		callRandom();
	}, [clicks]);

	const handleChange = async (e) => {
		const link = await Random.getStreamLink(e.label);
		setRandomStream(link);
		setSearchTerm(e);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (resetState) {
			resetState([]);
		}
		navigate(`/search/${searchTerm.value}`);
		if (setInitial) {
			setInitial(searchTerm.label);
		}
		setSearchTerm("");
	};

	let styles = {
		input: (provided, state) => ({
			...provided,
			fontWeight: "bold",
			fontSize: "30px",
			color: "black",
			padding: "10px",
		}),
		menuList: (provided, state) => ({
			...provided,
			color: "red",
		}),
		indicatorSeparator: (provided, state) => ({
			...provided,
			display: "none",
		}),
		dropdownIndicator: (provided, state) => ({
			...provided,
			color: "black",
		}),
		placeholder: (provided, state) => ({
			...provided,
			fontWeight: "bold",
			color: "black",
			fontSize: "30px",
			padding: "10px",
		}),
		control: (provided, state) => ({
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
		singleValue: (provided, state) => ({
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
				options={gameList}
				onChange={handleChange}
				className="search-form__input"
				styles={styles}
				placeholder="Select a catagory..."
			/>
			<div className="btns-wrapper">
				<button className="search-btn">Livestream Search</button>
				<a
					href={randomStream}
					target="_blank"
					rel="noopener noreferrer"
					onClick={() => setClicks(clicks + 1)}
					className="search-btn"
				>
					I'm Feeling Lucky
				</a>
			</div>
		</form>
	);
};

export default SearchForm;
