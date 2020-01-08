import React, { Component } from 'react'
import { Text, View, Image, TextInput, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import vi from '~/i18n/locales/vi'
import axios from 'axios';
import reactotron from 'reactotron-react-native';

export default class ProductScreen extends Component {

    componentDidMount() {
        this._PostLogin()
    }

    state = {
        fullName: 'Nguyễn Trường Thăng',
        phoneNumber: '0975545828'
    }
    render() {

        return (
            <View>
                <Image style={styles.img_daiichi} source={require("@image/img_logodaiichi.png")} />

                <View style={{
                    marginTop: 30,
                    marginLeft: 24,
                    marginRight: 24
                }}>
                    {this._Gettextinput("Nhập sô điện thoại")}
                    {this._Gettextinput("Nhập mật khẩu")}
                </View>
                {this._Gettext()}
                <TouchableOpacity style={styles.buttom_login}>
                    <Text style={styles.buttom_text}>Đăng nhập</Text>
                </TouchableOpacity>

                {this._Getfuction()}
                <View style={styles.view_bottom}>
                    {this._GetImage(require("../assets/images/ic_facebook.png"))}
                    {this._GetImage(require("../assets/images/ic_google.png"))}
                </View>


            </View>
        )
    }

    _PostLogin(){
        axios.post('http://winds.hopto.org:8521/api/Service/LoginApp', {
      "value":"0834629458",
      "password":"123456",
      "type":"4"
    })
    .then(res => reactotron.log(res.data))
    .catch(err => reactotron.log(err))
    }


    _Gettextinput(title, value) {
        return (
            <TextInput
                style={styles.input_text}
                placeholder={title}
                value={value}
                onChangeText={newText => {
                    this.setState({
                        phoneNumber: newText
                    })
                }}
            />
        )

    }
    _Gettext() {
        return (
            <View style={{
                flexDirection: 'row',

                marginTop: 12,
                marginLeft: 24,
                marginRight: 24,
                justifyContent: 'space-between'
            }}>
                <View style={{
                    flexDirection: 'row',

                }}>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'Roboto'
                    }}>Chưa có tài khoản ? </Text>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: 'Roboto',
                            color: '#12A74E',
                            textDecorationLine: 'underline'
                        }}>Đăng kí</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'Roboto'
                    }}>Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _Getfuction() {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: 35,
                marginRight: 24,
                marginLeft: 24,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={styles.line} />
                <Text style={{
                    marginLeft: 10,
                    marginRight: 10,
                    fontSize: 14,
                    fontFamily: 'Roboto'
                }}>hoặc</Text>
                <View style={styles.line} />
            </View>
        )

    }
    _GetImage(pathimage) {
        return (
            <TouchableOpacity>
                <Image source={pathimage} />
            </TouchableOpacity>
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
        width: 328,
        height: 50,
        marginTop: 20,
        borderBottomWidth: 0.2,
        borderColor: '#707070'
    },
    img_daiichi: {
        width: 292,
        height: 68,
        marginTop: 101,
        marginLeft: 35,
        marginRight: 48,
        resizeMode: "contain"

    },
    buttom_login: {
        width: 330,
        height: 46,
        borderRadius: 25,
        backgroundColor: '#12A74E',
        marginTop: 35,
        marginLeft: 23,
        marginRight: 22
    },
    buttom_text: {
        color: '#FFFFFF',
        width: 100,
        height: 31,
        marginTop: 12,
        marginLeft: 127,
        marginRight: 127,
        fontSize: 16,
        fontFamily: 'roboto'
    },
    line: {
        height: 1.5,
        width: 134,
        backgroundColor: '#707070'
    },
    view_bottom: {
        flexDirection: 'row',
        marginTop: 42,
        marginLeft: 105,
        marginRight: 105,
        width: 166,
        height: 66,
        justifyContent: 'center'
    }

})