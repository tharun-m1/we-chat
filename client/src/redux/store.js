import { configureStore } from "@reduxjs/toolkit";
import ChatBoxReducer from "./chatBoxSlice";
export const store = configureStore({
  reducer: {
    chatBox: ChatBoxReducer,
  },
});
