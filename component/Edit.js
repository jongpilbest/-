
import React, { useState, useContext } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//simport '../assets/font' as Font from "expo-font";
//import { Context } from '../contextv/DetailContext'
//import { Context2 } from '../contextv/DetailContext'
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
//import { authAction } from "../redux/auth";
import { tokenAction } from "../redux/token";
import { ownerAction } from "../redux/owner_name";
//import { tokenAction } from "../redux/token";

//const dispatch = useDispatch();
const Edit = function ({ navigation }) {
    var good = 0;
    var total_response = 0;


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
            position: 'relative', backgroundColor: '#DDEEF2',
            height: '100 %'
        }} >
            <View style={{

                width: '100%',
                height: '20%',
                backgroundColor: 'white'
            }}>
                <Text style={{
                    fontFamily: "Nam-Bold"
                    , fontSize: 50,
                    marginTop: 25,
                    marginLeft: 20

                    , alignSelf: "center",

                    position: 'absolute',
                    top: '35%',
                    marginTop: '5%',
                }}>
                    로그인
                </Text>
            </View>
            <View>


                <TextInput
                    style={{
                        width: '86%',
                        height: '13%',
                        borderRadius: 20,
                        borderColor: 'transparent',
                        borderWidth: 3,
                        marginTop: '17%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        backgroundColor: 'white',
                        //padding: 20,
                        fontSize: 10,
                        fontFamily: "Nam-Bold"
                    }}
                    value={id}
                    placeholder="아이디를 입력해주세요"
                    placeholderTextColor={'#B9B9B9'}
                    autoCorrect={false}
                    onChangeText={(ele) => setid(ele)}>

                </TextInput>
                <TextInput
                    style={{
                        width: '86%',
                        height: '13%',
                        borderRadius: 20,
                        borderWidth: 3,
                        borderColor: 'transparent',
                        margin: 10,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        backgroundColor: 'white',
                        marginTop: 30,
                        // padding: 20,
                        fontSize: 10, fontFamily: "Nam-Bold"

                    }}
                    placeholder="비밀번호를 입력해 주세요 "
                    placeholderTextColor={'#B9B9B9'}
                    value={password}
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(ele) => setpassword(ele)}>

                </TextInput>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={() => {

                        // tokevn(id, password)
                        console.log('?')

                        axios.post("http://14.37.76.88:5000/auth/login", {

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




                    }

                        // navigation.navigate('index')
                    }











                    >


                        <View style={{
                            borderRadius: 15,
                            alignSelf: "center",
                            backgroundColor: 'white',
                            width: 150,
                            height: 34,
                            marginTop: '20%',
                            marginLeft: '35%'
                        }}>



                            <Text style={style.bottm}>
                                로그인
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('first')
                    }}>
                        <Text style={style.bottmm}>
                            회원가입
                        </Text>
                    </TouchableOpacity>

                </View>




            </View>

        </View >


    )
}
//Edit.navigationsetOptions({ tabBarStyle: { display: 'none' } })
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
        backgroundColor: '#D2E6FF'

    },
    login: {
        fontSize: 58,
        alignSelf: "center",
        color: '#7C7C7C',
        position: 'absolute',
        top: '35%',
        marginTop: '5%',
        // fontFamily: 'Mate-Regular'


    }, bottm: {
        //alignSelf: "center",
        //justifyContent: 'center',
        top: '13%',
        fontFamily: "Nam-Bold",
        textAlign: 'center',
        alignContent: 'center',
        fontSize: 15,
        color: '#545252',
        // fontFamily: 'Roboto',

        marginTop: '4%'
    }, bottmm: {
        marginTop: '10%',
        fontFamily: 'Nam-Bold',
        fontSize: 13,
        alignSelf: "center",
    }

})

export default Edit;