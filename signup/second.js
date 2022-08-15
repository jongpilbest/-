import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text, Alert } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { Context } from '../contextv/DetailContext'

var id = 0;
import { authAction } from "../redux/auth";

const second = function ({ navigation }) {
    const dispatch = useDispatch();
    //  const { add_password } = useContext(Context);
    const [password, setpassword] = useState("");

    const is_password = useSelector((state) => state.auth.password)

    const go_go_opacity = function () {

        if (password.length == 0) {
            return {
                opacity: 0,

            }

        }
        else {
            return {
                fontSize: 15,
                color: '#FF4444',
                fontWeight: 'bold',
                marginLeft: '40%',
                fontFamily: 'Nam-Bold',
            }
        }
    }



    var re = /^[a-z0-9_-]{2,10}$/;

    const checkcorrct = function (el) {



        if (!re.test(password)) {

            return false;
        }

        if (re.test(password)) {

            return 1;
        }

        return true;

    }



    return (
        <View style={{
            backgroundColor: '#DDEEF2',
            height: '100%'
        }}>
            <View style={{
                marginTop: '30%',
                marginLeft: '3%'

            }}>
                <Text style={{

                    fontSize: 20,
                    color: '#545252',
                    marginLeft: 15,
                    fontWeight: 'bold',
                    fontFamily: 'Nam-Bold',


                }}>
                    비밀번호를 입력해주세요
                </Text>
            </View>

            <TextInput
                style={style.border}
                value={password}
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(ele) => setpassword(ele)}

            >
            </TextInput>

            {
                !checkcorrct(password) && <Text style={go_go_opacity()}>
                    형식에 맞게 입력해주세요
                </Text>
            }


            < TouchableOpacity onPress={() => {
                if (checkcorrct(password) == 1) {
                    // add_password(password)



                    dispatch(authAction.setpassword(password))

                    navigation.navigate('fifth');
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


export default second;