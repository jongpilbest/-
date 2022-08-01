import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
 good: []


}

const goodslice = createSlice({

 name: 'good',
 initialState: initialstate,
 reducers: {
  setgood: (state, action) => {
   state.good = [...state.good, action.payload]
  },

 }

})


export const goodAction = goodslice.actions;

export default goodslice.reducer;
