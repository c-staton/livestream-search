import { configureStore } from "@reduxjs/toolkit";
import streamsReducer from "./features/streams/streamsSlice";
import randomReducer from "./features/random/randomSlice";

export const store = configureStore({
	reducer: {
		streams: streamsReducer,
		random: randomReducer,
	},
});
