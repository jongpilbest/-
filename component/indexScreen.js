
import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native";

//import { Context } from '../contextv/DetailContext'



const indexScreen = ({ navigation }) => {
    // const { delete_all } = useContext(Context);
    var state_state = (Context._currentValue.state);
    console.log(`메인에서 봐구 `);
    console.log(state_state)
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                <Text style={{ fontSize: 40 }}>
                    Login
                </Text>


            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Barcode')}>
                <Text style={{ fontSize: 40 }}>
                    바코드
                </Text>


            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Item_list')}>
                <Text style={{ fontSize: 40 }}>
                    아이템 리스트
                </Text>


            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                //console.log(Context._currentValue)


                //console.log(Context._currentValue)
            }}>
                <Text style={{ fontSize: 40 }}>
                    다지울수 있냥고
                </Text>


            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Mypage_main')}>
                <Text style={{ fontSize: 40 }}>
                    마이페이지
                </Text>


            </TouchableOpacity>


        </View >
    )
}

const style = StyleSheet.create({


})
export default indexScreen;