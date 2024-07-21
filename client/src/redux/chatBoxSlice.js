import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};
export const chatBoxSlice = createSlice({
  name: "chatBox",
  initialState,
  reducers: {
    openChatBox: (state) => {
      state.value = true;
    },
    closeChatBox: (state) => {
      state.value = false;
    },
  },
});

export const { openChatBox, closeChatBox } = chatBoxSlice.actions;
export default chatBoxSlice.reducer;
