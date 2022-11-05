

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"

import { useSelector, useDispatch } from 'react-redux'

import { authAction } from "../redux/auth";
//import { Context } from "../contextv/DetailContext";

var hey = -1;




const Componn = function ({ vale, gogo, go_he }) {
    console.log(`vale ${vale}`)
    var [num, setnum] = useState(0);
    console.log('현재 num 의 수는?');
    console.log(num)


    const is_id = useSelector((state) => state.auth.array_list)
    const dispatch = useDispatch();
    const good_list = useSelector((state) => state.auth.array_list)

    const tr = good_list.includes(vale.kr);
    //var imagepath = require(`${vale.image}`)

    // let imagepath = require( vale.image )
    // const { check_corrct } = useContext(Context);

    const onpress = () => {
        console.log('check')
        console.log(is_id)
        setnum((pre) => pre + 1)
        console.log(num)
        if (tr == true) {
            console.log(
                ' 뭐냐'
            )
            dispatch(authAction.setallergy_0(vale.kr))
            setnum(2)
            return (

                {
                    backgroundColor: '#ffffff',
                    borderColor: '#545252',
                    borderwidth: '1',
                    width: 89,
                    height: 100,
                    marginTop: 10,
                    marginLeft: 20,
                    padding: 0,
                    borderRadius: 5,
                    flexDirection: "row",

                }
            )
        }
        else if (num == 0) {

            console.log('여기안ㅁ?')
            dispatch(authAction.setallergy_1(vale.kr))
        }
        else if (num == 1) {
            console.log('TD')
            //  console.log(vale.kr)
            dispatch(authAction.setallergy_0(vale.kr))
            setnum(0);
        }
    };

    const goto = function () {


        if (num == 2) {
            console.log('올로')
            // console.log(num)
            setnum(0)

            return (
                {
                    borderWidth: 1,
                    borderColor: '#545252',
                    width: 89,
                    height: 100,
                    marginTop: 10,
                    marginLeft: 18,
                    padding: 0,
                    borderRadius: 20,

                    flexDirection: "row",

                }
            )
        }

        else if (num == 1) {
            console.log('일로왈')
            //console.log(vale.kr)

            console.log(is_id, num)

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

                    backgroundColor: '#FFE978',
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


                    backgroundColor: '#FFE978',
                    width: 89,
                    height: 100,
                    marginTop: 10,
                    marginLeft: 18,
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
                    borderWidth: 1,
                    borderColor: '#545252',
                    backgroundColor: 'white',
                    width: 89,
                    height: 100,
                    marginTop: 10,
                    marginLeft: 18,
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
                        fontSize: 14,
                        color: '#545252',
                        fontWeight: 'bold',

                        marginTop: 0,
                        fontFamily: 'Sc',



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