

import { combineReducers, createStore } from "redux";
//import { combineReducers, createStore } from "redux";
//import { combineReducer } from "@reduxjs/toolkit";
import authReducer from './auth';
import barcodeReducer from './Barcode'
import tokenReducer from './token'
import favoriteReducer from './favorite'
//import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({

 reducer: { auth: authReducer, barcode: barcodeReducer, token: tokenReducer, favorite: favoriteReducer }
})

export default store
