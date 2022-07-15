import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
const initialstate = {
 barcode: '',
 

}

const barcodeslice = createSlice({

 name: 'barcode',
 initialState: initialstate,
 reducers: {
  setbarcode: (state, action) => {
   state.barcode = action.payload
  },

 }

})


export const barcodeAction = barcodeslice.actions;

export default barcodeslice.reducer;
