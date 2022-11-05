
//import { Commands } from "react-native/Libraries/Components/RefreshControl/AndroidSwipeRefreshLayoutNativeComponent";
import BigContext from "./BigContext";
//import { AsyncStorage } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";
import React, { useState, useContext, useEffect } from "react"
const initialstate = function (state, action) {

    switch (action.type) {
        case 'im_Si_item': {
            return [...state, {

                name: action.item.kr,
                company: action.item.company,
                src: action.item.src,
                item: action.item.item


                //number: Math.floor(Math.random() * 999)
            }]

        }
        case 'good': {

            console.log('Token 찾아보소');
            console.log(action.token)

            state.id = action.id;
            state.password = action.password
            state.token = action.token
            console.log('전체 state');
            console.log(state)
            return state

        }

        case 'die': {
            state.length = 0;
            console.log(state)

        }

        case 'delete_Barcode': {

            var hey = state
            // console.log(hey)
            state.Barcode = [];
            return state;

        }
        case 'create_Barcode': {
            //  state = [];
            // state.Barcode = [];
            [...state, state.Barcode = action.setbarcode]
            return state;
        }
        case 'add_id': {

            return [...state, {

                id: action.id
            }]

            // console.log(state)
        }
        case 'input_password': {
            return [...state, {

                password: action.pasv
            }]

        }
        case 'set_state': {
            var index = -1;

            for (var i = 0; i < state.length; i++) {
                if (state[i].name == action.setid) {
                    index = i;

                    break;

                }
            }


            //console.log(index, state[index]);
            if (index >= 0) {
                var fr = state[index];
                fr['here'] = 1;
                // console.log(fr);
            }
            // console.log(state)
        }

        case 'put_state': {
            //console.log(state);
            // console.log("소스케짱")
            return state;

        }
        case 'add_nickname': {
            return [...state, {

                nickname: action.nickname
            }]

        }
        case 'tokevn': {
            return [...state, {

                id: action.id,
                password: action.password
            }]

        }


        case 'delete_all': {

            var hey = state
            // console.log(hey)
            state.list = [];
            return state;

        }
        case 'create_arr': {
            //  state = [];
            [...state, state.list = action.arr]
            console.log('에러잡기 ')
            console.log(state)
            return state;
        }




    }

}

const die = (dispatch) => {

    return () => {
        dispatch({
            type: 'die'

        })

    }

}
const add_component = (dispatch) => {

    return (item) => {
        dispatch({
            type: 'add_component', item: item,

        })

    }

}

const add_id = (dispatch) => {

    return (item) => {
        dispatch({
            type: 'add_id', id: item
        })

    }



}
const add_password = (dispatch) => {

    return (item) => {
        dispatch({
            type: 'input_password', pasv: item
        })

    }

}
const add_nickname = (dispatch) => {

    return (item) => {
        dispatch({
            type: 'add_nickname', nickname: item
        })

    }

}


const signtoken = (dispatch) => {



    return async (id, password) => {
        var total_response = 0;


        try {
            axios.post("http://15.165.76.99:5000/auth/login", {

                "userId": id,
                "password": password


            }).then((response) => {
                if (response) {
                    console.log('?? first');
                    total_response = response.data.token
                    console.log(total_response)

                    //AsyncStorage.setItem('Token', total_response)
                    dispatch({
                        type: 'good',
                        id: id,
                        password: password,
                        token: total_response


                    })

                }
            }).catch((err) => {
                console.log(err.message);

            });

        }
        catch (err) {


        }





    }

}

const set_state = (dispatch) => {

    return (item) => {
        dispatch({
            type: 'set_state',
            setid: item

        })

    }

}
const create_Barcode = (dispatch) => {

    return (item, callback) => {
        dispatch({
            type: 'create_Barcode',
            setbarcode: item

        })
        if (callback) {
            callback();
        }

    }
}

const delete_Barcode = (dispatch) => {


    return () => {

        dispatch({

            type: 'delete_Barcode',


        })
    }



}
const put_state = (dispatch) => {

    return () => {
        dispatch({
            type: 'put_state'

        })

    }

}

const im_Si_item = (dispatch) => {

    return (item) => {
        dispatch({
            type: 'im_Si_item',
            item: item

        })

    }

}



const tokevn = (dispatch) => {







    return (id, password) => {

        axios.post("http://15.165.76.99:5000/auth/login", {

            "userId": id,
            "password": password


        })
            .then((response) => {
                if (response) {
                    console.log('?? first');
                    console.log(response.data)
                    //setcheck(response.data);

                    //setUser(response);
                } else {
                    alert("failed to ");
                }
            }).catch((err) => {
                console.log(err.message);
                console.log(err)
                console.log('?');
            });


        dispatch({

            type: 'tokevn',
            id: id,
            password: password

        })
    }



}

const delete_all = (dispatch) => {


    return () => {

        dispatch({

            type: 'delete_all',


        })
    }



}

const create_arr = (dispatch) => {


    return (arr) => {
        console.log('?!미수')
        console.log(arr)

        dispatch({

            type: 'create_arr',
            arr: arr

        })
    }



}



export const { Context, Provider } = BigContext(initialstate, {
    create_Barcode,
    delete_Barcode, signtoken, delete_all, tokevn, die, im_Si_item, add_nickname, put_state,
    set_state, create_arr, add_password, add_component, add_id
}, []);