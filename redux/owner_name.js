import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
const initialstate = {
 barcode: '',


}

const ownerslice = createSlice({

 name: 'owner',
 initialState: initialstate,
 reducers: {
  setowner: (state, action) => {
   state.owner = action.payload
  },

 }

})


export const ownerAction = ownerslice.actions;

export default ownerslice.reducer;
