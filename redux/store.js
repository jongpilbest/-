

import { combineReducers, createStore } from "redux";
//import { combineReducers, createStore } from "redux";
//import { combineReducer } from "@reduxjs/toolkit";
import authReducer from './auth';
import barcodeReducer from './Barcode'
import tokenReducer from './token'
import goodReducer from './good'
import favoriteReducer from './favorite'
import changeReducer from './change'
import ownerReducer from './owner_name'
//import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({

 reducer: { change: changeReducer, auth: authReducer, owner: ownerReducer, barcode: barcodeReducer, good: goodReducer, token: tokenReducer, favorite: favoriteReducer }
})

export default store
