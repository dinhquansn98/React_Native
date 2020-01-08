import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import DaiichiHeader from '~/components/DaiichiHeader'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';

export default class baohanh extends Component {
    render() {
        return (
            <View style = {styles.container}>
               <DaiichiHeader
                    title='Bảo hành '
                    back
                />  
            </View>
           

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        alignItems: 'center'

    },
    input_text: {
        width: '90%',
        height: 50,
        backgroundColor: 'gray',
        marginTop: 10

    }
})