

import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"



const SeachBar = function ({ onfinsh }) {


    const [com, setcom] = useState("");
    const namce = function () {
        // set_state(com);
        onfinsh(com);
    }
    return (
        <View>
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
        width: '90%',
        height: 40,
        //borderColor: 'black',
        borderWidth: 5,
        marginTop: 26,
        borderRadius: 10,
        margin: 10,
        borderColor: '#D2D2D2',
        borderWidth: 3,

    }

})

export default SeachBar;

