import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
   name: "search",
   initialState: {
    cacheResults: {},
   },
   reducers: {
    cacheResults: (state, action)=>{
        state.cacheResults = Object.assign(
            state.cacheResults,
            action.payload
        );
    },
   },
});

export const{ cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
