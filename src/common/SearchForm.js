import React, { useState } from "react";
import Select from "react-select";
import gameList from "./GameList";
import "./styles/SearchForm.css";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ setInitial }) => {
	const [searchTerm, setSearchTerm] = useState("");
	let navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchTerm("");
		navigate(`/search/${searchTerm.value}`);
		if (setInitial) {
			setInitial(searchTerm.label);
		}
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
				onChange={(op) => setSearchTerm(op)}
				className="search-form__input"
				value={searchTerm}
				styles={styles}
				placeholder="Select a catagory..."
			/>
			<div className="btns-wrapper">
				<button className="search-btn">Livestream Search</button>
				<a href="/random" className="search-btn">
					I'm Feeling Lucky
				</a>
			</div>
		</form>
	);
};

export default SearchForm;
