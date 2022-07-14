

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"

import { useSelector, useDispatch } from 'react-redux'

import { authAction } from "../redux/auth";
//import { Context } from "../contextv/DetailContext";

var hey = -1;




const Componn = function ({ vale, gogo }) {
    console.log(`vale ${vale}`)
    var [num, setnum] = useState(0);
    const dispatch = useDispatch();
    const good_list = useSelector((state) => state.auth.array_list)

    const tr = good_list.includes(vale.kr);
    //var imagepath = require(`${vale.image}`)

    // let imagepath = require( vale.image )
    // const { check_corrct } = useContext(Context);

    const onpress = () => {

        dispatch(authAction.setallergy_1(vale.kr))
    };

    const goto = function () {



        if (num == 1) {
            console.log('일로왈')
            console.log(vale.kr)



            //dispatch(authAction.setallergy_1(vale.kr))



            /*
            if (vale.check == 1) {

                setnum(2);
                //return;

            }
*/
            //vale.check = 1;



            return (
                {

                    backgroundColor: '#D2E6FF',
                    width: 89,
                    height: 100,
                    marginTop: 10,
                    marginLeft: 20,
                    padding: 0,
                    borderRadius: 20,

                    flexDirection: "row",

                }
            )
        }


        else if (tr == true) {
            console.log(
                '?'
            )

            return (

                {

                    backgroundColor: '#D2E6FF',
                    width: 89,
                    height: 100,
                    marginTop: 10,
                    marginLeft: 20,
                    padding: 0,
                    borderRadius: 20,
                    flexDirection: "row",

                }
            )
        }




        else if (num == 0) {
            //check_corrct(vale.name, 0);
            return (
                {

                    backgroundColor: '#D2D2D2',
                    width: 89,
                    height: 100,
                    marginTop: 10,
                    marginLeft: 20,
                    padding: 0,
                    borderRadius: 20,
                    flexDirection: "row",
                    // flexWrap: "wrap",

                }
            )
        }





    }


    return (



        <TouchableOpacity
            onPress={() => onpress()}>
            <View style={goto()}

            >
                <View style={{
                    width: '100%',
                    height: '80%',

                    justifyContent: 'center',


                }}>
                    <Text style={{
                        fontSize: 16,
                        color: '#545252',
                        fontWeight: 'bold',
                        marginLeft: 4,
                        marginTop: 0



                    }}>  {vale.kr}</Text>

                </View>




            </View >

        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({


    border: {

        backgroundColor: 'white',
        width: 80,
        height: 100,
        marginTop: 10,
        marginLeft: 30,




    },




})



export default Componn