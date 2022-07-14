import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
 token: '',


}

const tokenslice = createSlice({

 name: 'token',
 initialState: initialstate,
 reducers: {
  settoken: (state, action) => {
   state.token = action.payload
  },

 }

})


export const tokenAction = tokenslice.actions;

export default tokenslice.reducer;
