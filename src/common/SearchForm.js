import React from "react";
import Select from "react-select";
import gameList from "./GameList";
import "./styles/SearchForm.css";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
	const navigate = useNavigate();

	const handleChange = (e) => {
		navigate(`/search/${e.value}`);
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
			borderColor: "#F0F0F0",
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
		<form name="post" className="search-form">
			<Select
				name="term"
				id="term"
				onChange={handleChange}
				className="search-form__input"
				styles={styles}
				placeholder="Select a category..."
				options={gameList}
			/>
		</form>
	);
};

export default SearchForm;
