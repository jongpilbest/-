
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
import { Context } from "../contextv/DetailContext";

const restart = function () {
    const { put_state } = useContext(Context);
    return ([])
}
export default restart