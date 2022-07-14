
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text, Alert } from "react-native"

import { Context } from '../contextv/DetailContext'


export default () => {
    var [misu, setmisu] = useState(0);


    const MS_good = () => {
        setmisu(Math.floor(Math.random() * 1000));
        return;

    }



    return (
        [MS_good, misu]
    )

}

