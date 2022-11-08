import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import LiveStreamSearch from "../../Api";

const initialState = {
	streamLink: "",
	btnClicks: 0,
};

export const getRandomStream = createAsyncThunk(
	"random/getRandomStream",
	async () => {
		try {
			const res = await LiveStreamSearch.randomStream();
			return res;
		} catch (err) {
			console.log(err);
		}
	}
);

const randomSlice = createSlice({
	name: "random",
	initialState,
	reducers: {
		addClick: (state) => {
			state.btnClicks = state.btnClicks + 1;
		},
	},
	extraReducers: {
		[getRandomStream.fulfilled]: (state, { payload }) => {
			state.streamLink = payload.data.link;
		},
	},
});

export const { addClick } = randomSlice.actions;
export default randomSlice.reducer;
