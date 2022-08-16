
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//import { Context } from '../contextv/DetailContext'
import { authAction } from "../redux/auth";
//import { cos } from 'react-native-reanimated';
//import { counterActions } from "../store"

import axios from "axios"
import { Ionicons } from '@expo/vector-icons';




const first = function ({ navigation }) {
    const dispatch = useDispatch();
    const [id, setid] = useState("");
    const [checkhey, setcheck] = useState(false);
    //const dispatch = useDispatch();

    const is_id = useSelector((state) => state.auth.id)


    // var userId = Math.floor(Math.random() * 10);
    // const { add_component, add_id, die } = useContext(Context)

    // const dispatch = useDispatch();
    // const set_id = useSelector((state) => state.id);
    //const push = () =>
    // const z = 1;

    const go_go_opacity = function () {

        if (id.length == 0) {
            return { opacity: 0 }
        }
        else {
            return {
                fontSize: 15,
                color: '#71A6E3',
                fontWeight: 'bold',
                marginLeft: '50%',
                fontFamily: 'Nam-Bold',
            }
        }
    }








    const check_id = function () {



        console.log('//')
        axios.get(`http://13.209.73.153:5000/auth/checkUserId/${id}`).then((response) => {
            if (response) {
                console.log('?? first');
                console.log(response.data)
                setcheck(response.data);

                //setUser(response);
            } else {
                alert("failed to ");
            }
        }).catch((err) => {
            console.log(err.message);
            console.log(err)
            console.log('?');
        });
        //console.log(' 체큰 ')
        //console.log(checkhey)
        // if (checkhey==true)



    }
    const check = function () {

        if (checkhey == true) {
            console.log('1 맞냐고')

            return false;

        }
        else
            return true;



    }


    return (
        <View style={{
            backgroundColor: '#DDEEF2',
            height: '100%'
        }}>

            <TouchableOpacity onPress={() => {

                console.log('엥')
                navigation.pop()
            }}>
                <Ionicons style={{

                    marginLeft: 15,
                    marginTop: 20,
                }} name="arrow-back-circle" size={50} color="black" />

            </TouchableOpacity>
            <View style={{
                marginTop: '10%',
                marginLeft: '3%'

            }}>
                <Text>
                    {is_id}
                </Text>
                <Text style={{

                    fontSize: 20,
                    color: '#545252',
                    marginLeft: 15,
                    fontWeight: 'bold',
                    fontFamily: 'Nam-Bold',


                }}>
                    아이디를 입력해주세요
                </Text>
            </View>



            <TextInput
                style={style.border}
                value={id}
                autoCorrect={false}
                onChangeText={(ele) => {
                    setid(ele);
                    setcheck(false)
                }}
                onSubmitEditing={() => check_id()}>
            </TextInput>
            {!check() && <Text style={go_go_opacity()}>
                존재하는 아이디 입니다.
            </Text>}
            < TouchableOpacity onPress={() => {


                if (id.length >= 0) {
                    if (checkhey == false) {

                        // die();


                        dispatch(authAction.setid(id))

                        // add_id(id);
                        navigation.navigate('nickname')


                    }







                }


            }}>
                <View style={{
                    backgroundColor: '#FFFFFF'
                    , width: '37%',
                    height: 40,
                    borderRadius: 10,
                    marginTop: '30%',
                    marginLeft: '55%'
                    //marginTop: '40%'


                }}>
                    <Text style={{
                        fontSize: 16,
                        alignItems: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                        color: '#545252',
                        marginTop: '10%',
                        fontWeight: 'bold',
                        fontFamily: 'Nam-Bold',
                    }}>
                        다음
                    </Text>
                </View>


            </TouchableOpacity>

        </View >

    )


}
first.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const style = StyleSheet.create({
    text: {
        width: 200,
        height: 40,
        borderColor: "black"
    },

    border: {
        width: '85%',
        height: 50,
        backgroundColor: 'white',
        borderColor: 'white',

        borderWidth: 3,
        margin: 10,
        borderRadius: 10,
        marginLeft: '3%',
        marginLeft: 15,
        marginTop: '5%',



    }

})

export default first;
