import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: "userDetails",
  initialState: {
    value: { token: undefined, role: undefined },
  },
  reducers: {
    myaction: (state, action) => {
      var token = action.payload;
      state.value = token;
    },
  },

});

export const { myaction } = slice.actions;
export default slice.reducer;
