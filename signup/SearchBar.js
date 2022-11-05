

import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"

import { Ionicons } from '@expo/vector-icons';

const SeachBar = function ({ onfinsh }) {


    const [com, setcom] = useState("");
    const namce = function () {
        // set_state(com);
        onfinsh(com);
    }
    return (
        <View style={{
            flexDirection: 'row'
        }}>

            <TextInput

                autoCapitalize='none'
                style={style.border}
                value={com}
                autoCorrect={false}


                onChangeText={(ele) => setcom(ele)}
                onSubmitEditing={() => namce()}>
            </TextInput>
        </View>
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
        height: 40,
        backgroundColor: 'white',



        margin: 10,
        borderRadius: 5,

        marginLeft: 25,
        marginTop: '5%',

    }

})

export default SeachBar;

