import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import LiveStreamSearch from "../../Api";

const initialState = {
	streams: [],
	highlightStream: {},
	offlineStreamers: [],
	isLoading: false,
	sortBy: "viewers",
};

export const searchPlatforms = createAsyncThunk(
	"streams/searchPlatforms",
	async (searchTerm) => {
		try {
			const res = await LiveStreamSearch.searchLives(searchTerm);
			return res;
		} catch (error) {
			console.log(error);
		}
	}
);

export const getStreamersLive = createAsyncThunk(
	"streams/getStreamersLive",
	async () => {
		try {
			const res = await LiveStreamSearch.isTopLive();
			return res;
		} catch (err) {
			console.log(err);
		}
	}
);

const streamsSlice = createSlice({
	name: "streams",
	initialState,
	reducers: {
		resetSortBy: (state) => {
			state.sortBy = "viewers";
		},
		sortStreams: (state, { payload }) => {
			const sorting = payload;
			state.sortBy = sorting;
			switch (sorting) {
				case "viewers":
					state.streams.sort(LiveStreamSearch.viewersSort);
					break;
				case "alphabetical":
					state.streams.sort(LiveStreamSearch.alphabetSort);
					break;
				case "random":
					state.streams.sort(LiveStreamSearch.randomSort);
					break;
				default:
					throw new Error("not a valid sort method");
			}
		},
	},
	extraReducers: {
		[searchPlatforms.pending]: (state) => {
			state.isLoading = true;
		},
		[searchPlatforms.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.streams = payload.data.streams;
		},
		[getStreamersLive.pending]: (state) => {
			state.isLoading = true;
		},
		[getStreamersLive.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			let streams = payload.data.online;
			let highlight = streams.shift();
			state.streams = streams;
			state.highlightStream = highlight;
			state.offlineStreamers = payload.data.offline;
		},
	},
});

export const { sortStreams, resetSortBy } = streamsSlice.actions;
export default streamsSlice.reducer;
