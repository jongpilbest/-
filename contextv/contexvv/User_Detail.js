
//import { Commands } from "react-native/Libraries/Components/RefreshControl/AndroidSwipeRefreshLayoutNativeComponent";
import BigBigContext from "./BigBigContext";


import React, { useState, useContext, useEffect } from "react"
const initialstate = function (state, action) {

    switch (action.type) {

        case 'die': {
            state.length = 0;
            console.log(action.item)

        }

    }

}

const die = (dispatch) => {

    return (id,password) => {
        dispatch({
            type: 'die',
            id: id,
            password: password


        })

    }

}





export const { Context2, Provider2 } = BigBigContext(initialstate, { die }, []);