import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Random } from "../../Api";

const initialState = {
	streamLink: "",
	btnClicks: 0,
};

export const getRandomStream = createAsyncThunk(
	"random/getRandomStream",
	async () => {
		try {
			const res = await Random.getStreamLink();
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
			state.streamLink = payload;
		},
	},
});

export const { addClick } = randomSlice.actions;
export default randomSlice.reducer;
