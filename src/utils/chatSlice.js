import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./Constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            // Optimise the messsge
            state.messages.splice(OFFSET_LIVE_CHAT,1);
            state.messages.push(action.payload);
        },
    },
});

export const { addMessage }= chatSlice.actions;
export default chatSlice.reducer;




