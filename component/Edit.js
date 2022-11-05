
import React, { useState, useContext } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//simport '../assets/font' as Font from "expo-font";
//import { Context } from '../contextv/DetailContext'
//import { Context2 } from '../contextv/DetailContext'
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { authAction } from "../redux/auth";
import { tokenAction } from "../redux/token";
import { ownerAction } from "../redux/owner_name";
//import { tokenAction } from "../redux/token";
import * as Notifications from 'expo-notifications';
import { faObjectGroup } from "@fortawesome/free-solid-svg-icons";
//const dispatch = useDispatch();
const Edit = function ({ navigation }) {
    var good = 0;
    var total_response = 0;
    function sendPushNotification() {
        console.log('엥..')

        fetch("https://exp.host/--/api/v2/push/send", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: 'ExponentPushToken[ZkctWDHsMuYDNcBgVqKEGL]',
                title: 'TEST -Sent',
                body: 'This is a test'
            })
        })
    }


    async function schedulePushNotification() {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "등록이 완료 됐습니다",
                body: '지금확인해 보세요',
                data: { data: 'goes here' },
            },
            trigger: { seconds: 1 },
        });
    }

    const dispatch = useDispatch();
    // const is_id = useSelector((state) => state.auth.id)
    //const is_password = useSelector((state) => state.auth.password)
    const [id, setid] = useState('');
    // const { signtoken } = useContext(Context);
    // console.log(Context2._currentValue.state);
    // const { logicalWidth, logicalHeight } = Dimensions.get('window')

    const [password, setpassword] = useState('');
    return (
        <View style={{
            position: 'relative', backgroundColor: 'white',
            height: '100 %'
        }} >
            <View style={{

                width: '100%',
                height: '28%',
                backgroundColor: '#F2F2F2'
            }}>
                <Text style={{
                    fontFamily: "Sc"
                    , fontSize: 66,
                    marginTop: 25,
                    marginLeft: 20

                    , alignSelf: "center",

                    position: 'absolute',
                    top: '35%',
                    marginTop: '5%',
                    color: 'black',
                    fontFamily: 'Aullia',
                    fontWeight: '900',

                }}>
                    Anof
                </Text>
            </View>
            <View>


                <TextInput
                    style={{
                        width: '86%',
                        height: '13%',
                        borderRadius: 5,
                        borderColor: 'transparent',

                        marginTop: '17%',
                        padding: 15,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        borderWidth: 1,
                        backgroundColor: '#F2F2F2',
                        //padding: 20,
                        fontSize: 10,
                        fontFamily: "Sc"
                    }}
                    value={id}
                    placeholder="아이디를 입력해주세요"
                    placeholderTextColor={'#545252'}
                    autoCorrect={false}
                    onChangeText={(ele) => setid(ele)}>

                </TextInput>
                <TextInput
                    style={{
                        width: '86%',
                        height: '13%',
                        borderRadius: 5,


                        margin: 10,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        backgroundColor: '#F2F2F2',
                        marginTop: 30,
                        padding: 15,
                        // padding: 20,
                        fontSize: 10, fontFamily: "Sc"

                    }}
                    placeholder="비밀번호를 입력해 주세요 "
                    placeholderTextColor={'#545252'}
                    value={password}
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(ele) => setpassword(ele)}>

                </TextInput>


                <View style={{
                    flexDirection: 'row',
                    width: '86%',
                    height: '10%',
                    backgroundColor: '#FFE978',
                    display: 'flex',
                    marginTop: '5%',
                    padding: 15,
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}>
                    <TouchableOpacity onPress={() => {





                        axios.post("http://15.165.76.99:5000/auth/login", {

                            "userId": id,
                            "password": password

                        }).then((response) => {
                            if (response) {
                                console.log('?? first');
                                total_response = response.data.token
                                console.log(response.data)
                                good = 1;

                                dispatch(tokenAction.settoken(total_response))
                                //AsyncStorage.setItem('Token', total_response)


                                if (response.data.status == "관리자") {
                                    navigation.navigate('Manager');
                                }
                                else {

                                    dispatch(ownerAction.setowner(response.data.nickname))


                                    navigation.navigate('main', { item: response.data.recommend, main_kisa: response.data.article })
                                }



                            }
                        }).catch((err) => {
                            console.log(err);
                            console.log(err.message);






                        });
                        //signtoken(id, password)



                    }}>



                        <Text style={{

                            fontFamily: 'Sc',
                            fontSize: 15,
                            justifyContent: 'center',
                            alignSelf: 'center',



                            fontFamily: "Sc"

                        }}>
                            로그인
                        </Text>

                    </TouchableOpacity>












                </View>
                <View style={{
                    flexDirection: 'row',
                    width: '86%',
                    height: '13%',


                    marginTop: '5%',
                    padding: 15,
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}>

                    <View style={{
                        width: '40%',
                        height: '100%',

                    }}>

                        <View>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('first');
                                dispatch(authAction.setallergy_zero())
                                dispatch(authAction.setingre_zero())
                            }}>
                                <Text style={{

                                    fontFamily: 'Sc',
                                    fontSize: 15,
                                    alignSelf: "center",
                                    justifyContent: 'center',

                                    color: '#545252',
                                    marginTop: '3%'

                                }}>
                                    회원가입
                                </Text>

                            </TouchableOpacity>
                        </View>


                    </View>

                </View>
            </View >
        </View >


    )
}
//Edit.navigationsetOptions({tabBarStyle: {display: 'none' } })
Edit.navigationOptions = () => {
    return {
        header: () => false,
    };
};
const style = StyleSheet.create({
    border: {
        width: '86%',
        height: '15%',

        borderColor: 'black',
        borderWidth: 3,
        margin: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'white'

    },
    login: {
        fontSize: 58,
        alignSelf: "center",
        color: '#7C7C7C',
        position: 'absolute',
        top: '35%',
        marginTop: '5%',
        // fontFamily: 'Mate-Regular'


    }, bottmm: {
        //alignSelf: "center",
        //justifyContent: 'center',

        fontFamily: "Aullia",
        textAlign: 'center',

        fontSize: 15,
        color: '#545252',
        // fontFamily: 'Roboto',

        marginTop: '10%',
        marginLeft: '25%'
    }, tt: {

        fontFamily: 'Sc',
        fontSize: 15,
        alignSelf: "center",
        justifyContent: 'center',
        marginTop: '50%',

        color: '#545252',
        marginTop: '7%'
    }

})

export default Edit;