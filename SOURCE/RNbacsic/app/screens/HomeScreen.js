import React, { Component } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    Image,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView

} from 'react-native';
import reactotron from 'reactotron-react-native';
import { FlatList } from 'react-native-gesture-handler';
import DaiichiHeader from '~/components/DaiichiHeader';
import NavigationUtil from '~/navigation/NavigationUtil';
import R from '@R'
import { requestHomeData } from '../constants/Api';
import { requestUserInfo } from '../constants/Api';


export default class HomeScreen extends Component {


    state = {
        isLoading: true,
        err: null,
        data: {},
        mang: [0],
        datauser: {}
    }

    componentDidMount() {
        this._getDataproduct()
        this._getData()
    }
    _getDataproduct = async () => {
        try {
            response = await requestHomeData("deviceid")
            reactotron.log(response)
            this.setState({
                isLoading: false,
                data: response.data
            })
        } catch (error) {
            this.setState({
                isLoading: false,
                err: error
            })
        }
    }
    _newsBlock() {
        return (<View style={{
            backgroundColor: 'white',
        }}>
            {this.state.data.listProduct.map(product => {
                return this._productItem(product)
            })}
        </View>)
    }
    _productBlock() {
        return (<View style={{
            width: "100%",
            height: 270,
            backgroundColor: 'white',
        }}>
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                <Text>Sản phẩm</Text>
                <Text>Tất cả</Text>
            </View>
            <View
                style={{
                    flex: 1
                }}>
                <ScrollView
                    horizontal={true}>
                    {this.state.data.listProduct.map(product => {
                        return this._productItem(product)
                    })}
                </ScrollView>
            </View>
        </View>)
    }

    _productItem(product) {
        return (<View style={{
            backgroundColor: '#FFFFFF',
            margin: 2,
            width: 150,
            height: 198,
            borderRadius: 5,
            shadowOffset: {
                width: 0,
                height: 1.5,
            },
            shadowRadius: 2,
            shadowOpacity: 0.2,
            elevation: 3,
        }}>
            <Image
                style={{
                    width: 150,
                    height: 120,
                    resizeMode: 'contain'
                }}
                source={{
                    uri: product.image
                }}
            />
            <Text style = {{
                height :45,
               marginLeft :10 
            }}>{product.name}</Text>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    
                }}
            >
                <Image
                    style={{
                        width: 14,
                        height: 14,
                        margin: 12,
                    }}
                    source={require("@image/ic_price.png")}
                />
                <Text style = {{
                    color : 'red'
                }}>{product.price} đ</Text>
            </View>


        </View>)
    }
    _funcBlock() {
        return (<View style={{
            width: "90%",
            height: 200,
            margin: 10,
            backgroundColor: 'white'
        }}>
        </View>)
    }

    _getData = async () => {
        try {
            response = await requestUserInfo("deviceid")
            reactotron.log(response)
            this.setState({
                isLoading: false,
                datauser: response.datauser
            })
        } catch (error) {
            this.setState({
                isLoading: false,
                err: error
            })
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <DaiichiHeader
                    title={"xin chao , "}
                />
                {this._renderBody()}
            </View>
        )
    }
    _renderBody() {
        if (this.state.isLoading)
            return (<ActivityIndicator />)
        if (this.state.err)
            return (<Text>Đã có lỗi xảy ra, vui lòng thử lại</Text>)
        return (

            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.box_Touch}>
                        <View style={styles.box_Touch_component1}>
                            <Text style={styles.box_textdiem}>Điểm Tích Lũy</Text>
                            <View style={styles.View_tichdiem}>
                                <Image source={require("../assets/images/ic_glod.png")} />
                                <Text>2000</Text>
                                <Image source={require("../assets/images/ic_arrow.png")} />
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <View>
                            <View style={styles.view_bottom}>
                                {this._getbuttom("Tích điểm", require("../assets/images/ic_tichdiem.png"))}
                                {this._getbuttom("Sử dụng điểm", require("../assets/images/ic_sudungdiem.png"), () => {
                                    NavigationUtil.navigate("")
                                })}
                                {this._getbuttom("Tiện ích", require("../assets/images/ic_tienich.png"), () => {
                                    NavigationUtil.navigate("tienich")
                                })}
                            </View>
                            <View style={styles.view_bottom}>
                                {this._getbuttom("Hỏi đáp", require("../assets/images/ic_hoidap.png"))}
                                {this._getbuttom("Đặt hàng", require("../assets/images/ic_dathang.png"))}
                                {this._getbuttom("Bảo hành", require("../assets/images/ic_baohanh.png"))}
                            </View>
                        </View>
                    </View>
                    <View style = {{
                        marginLeft : 10 ,
                        marginTop : 7 
                    }}>
                        <View style={styles.view_text}>
                            <Text style = {{
                                fontSize : 18 ,
                                fontFamily : 'Roboto',
                                color : 'red'
                            }}>Sản Phẩm</Text>
                            <TouchableOpacity>
                                <Text style = {{
                                    color : 'red',
                                    marginRight : 10 
                                }}
                                >Tất cả</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal={true}>

                            {this.state.data.listProduct.map(product => {
                                return this._productItem(product)
                            })}
                        </ScrollView>

                    </View>
                </ScrollView>
            </View>

        )
    }

    _getbuttom(title, imagepath, pathbuttom) {
        return (

            <TouchableOpacity onPress={pathbuttom}
                style={styles.view_image}>

                <Image style={styles.image} source={imagepath} />
                <Text>{title}</Text>

            </TouchableOpacity>
        )
    }
    

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    box_Touch: {
        marginLeft: 13,
        marginRight: 12,
        marginTop: 65,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 1.5,
        },
        shadowRadius: 2,
        shadowOpacity: 0.2,
        elevation: 3,

    },
    box_Touch_component1: {
        flexDirection: 'row',
        marginLeft: 8,
        marginTop: 8,
        marginRight: 5,

    },
    box_textdiem: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Regular'
    },
    view_bottom: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        

    },
    image: {
        width: 36,
        height: 36
    },
    view_image: {
        alignContent: 'center',
        alignItems: 'center'
    },
    View_tichdiem: {
        flexDirection: 'row'
    },
    view_textdiem: {
        flex: 1
    },
    line: {
        marginTop :9 ,
        marginLeft: 30,
        marginRight: 27,
        height: 1,
        backgroundColor: '#8B8B8B'
    },
    Buttonview1: {
        backgroundColor: '#FFFFFF',
        margin: 2,
        width: 150,
        height: 198,
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 1.5,
        },
        shadowRadius: 2,
        shadowOpacity: 0.2,
        elevation: 3,
    },
    view_text: {
        marginTop : 13,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})