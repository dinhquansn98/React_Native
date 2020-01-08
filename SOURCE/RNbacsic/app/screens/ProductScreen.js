import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import DaiichiHeader from '~/components/DaiichiHeader'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import axios from 'axios';



export default class demologin extends Component {

    componentDidMount(){
        this._PostLogin()
    }


    render() {
        return (
            <View>

            </View>
        )
    }


    _PostLogin() {
        console.log("login")
        axios.post(
            'http://winds.hopto.org:8521/api/Service/LoginApp', 

            {
                "value":"0834629458",
                "password":"123456",
                "type":"4"
            },
            {
               headers: {
                   token : '65FD62931DE65C0F2F0EC18B28F78456',
                    //other header fields
               }
            }
        );
            
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