import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
 favorite: []


}

const favoriteslice = createSlice({

 name: 'favorite',
 initialState: initialstate,
 reducers: {
  setfavorite: (state, action) => {
   state.favorite=[...state.favorite,action.payload]
  },

 }

})


export const favoriteAction = favoriteslice.actions;

export default favoriteslice.reducer;
