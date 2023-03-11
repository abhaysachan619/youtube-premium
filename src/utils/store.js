import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";


const store = configureStore({
   reducer:{
    app: appslice,
    search: searchSlice,
    chat: chatSlice,
   },
});

export default store;