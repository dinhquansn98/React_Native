import React, { Component } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    Image,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    
} from 'react-native';
import axios from 'axios'
import {FlatList } from 'react-native-gesture-handler';
import DaiichiHeader from '~/components/DaiichiHeader';
import NavigationUtil from '~/navigation/NavigationUtil';
class Buttonview1 extends Component {


    render() {

        return (

            <TouchableOpacity style={styles.Buttonview1}>
                <Image source={require('../assets/images/img_product.png')}>
                </Image>
                <Text style={{ fontSize: 15 }}>{this.props.textview1}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/images/ic_price.png')} />
                    <Text style={{ color: '#F70029' }}>{this.props.gia}</Text>

                </View>

            </TouchableOpacity>



        );
    }

}
export default class HomeScreen extends Component {


    state = {
        isLoading: true,
        err: null,
        data: {},
        mang :[0],
        dataproduct :{}
    }

    componentDidMount() {
        this._getData()
        this._getDataproduct()
    }
    _getDataproduct(){
        console.log("laydataproduct")
        axios.get("http://winds.hopto.org:8521/api/Service/getListProduct?page=1&limit=10&parentID=1", {
            headers: {
                token: '65FD62931DE65C0F2F0EC18B28F78456'
            }
        }).then(response => {
            console.log(response.data)
            this.setState({
                isLoading: false,
                dataproduct: response.data.dataproduct
            })
        }).catch(err => {
            console.log(err)
            this.setState({
                isLoading: false,
                err: err
            })
        })
    }

    _getData() {
        console.log("laydata")
        axios.get("http://winds.hopto.org:8521/api/Service/GetUserInfor", {
            headers: {
                token: '65FD62931DE65C0F2F0EC18B28F78456'
            }
        }).then(response => {
            console.log(response.data)
            this.setState({
                isLoading: false,
                data: response.data.data
            })
        }).catch(err => {
            console.log(err)
            this.setState({
                isLoading: false,
                err: err
            })
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <DaiichiHeader
                    title =  {"xin chao ," + this.state.data.customerName}
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
        return (<SafeAreaView
            style={styles.container}>
            <View style={styles.box_Touch}>
                <View style={styles.box_Touch_component1}>
                    <Text style = {styles.box_textdiem}>Điểm Tích Lũy</Text>
                    <View style ={styles.View_tichdiem}>
                        <Image source = {require ("../assets/images/ic_glod.png")} />
                        <Text>2000</Text>
                        <Image source = {require ("../assets/images/ic_arrow.png")}/>
                    </View>
                </View>
                <View style = {styles.line}></View>
                <View>
                    <View style={styles.view_bottom}>
                        {this._getbuttom("Tích điểm", require("../assets/images/ic_tichdiem.png"))}
                        {this._getbuttom("Sử dụng điểm",require("../assets/images/ic_sudungdiem.png"),() => {
                NavigationUtil.navigate("")})}
                        {this._getbuttom("Tiện ích",require("../assets/images/ic_tienich.png"),() => {
                NavigationUtil.navigate("tienich")})}
                    </View>
                    <View style={styles.view_bottom}>
                        {this._getbuttom("Hỏi đáp",require("../assets/images/ic_hoidap.png"))}
                        {this._getbuttom("Đặt hàng",require("../assets/images/ic_dathang.png"))}
                        {this._getbuttom("Bảo hành",require("../assets/images/ic_baohanh.png"))}
                    </View>
                </View>
            </View>
            <View>
                <View style = {styles.view_text}>
                 <Text>Sản Phẩm</Text>
                <TouchableOpacity>
                    <Text>Tất cả</Text>
                </TouchableOpacity>
                </View>
                <FlatList
                        data={this.state.mang}
                        renderItem={({ item }) =>
                            <View style={{ flexDirection: 'row' }}>
                                <Buttonview1 uriname3='' textview1='QUẠT CÂY DAIICHI DC-SF6900' gia='2,000,000₫' />
                                <Buttonview1 uriname3='' textview1='QUẠT CÂY DAIICHI DC-SF6900' gia='2,000,000₫' />
                                <Buttonview1 uriname3='' textview1='QUẠT CÂY DAIICHI DC-SF6900' gia='2,000,000₫' />
                                <Buttonview1 uriname3='' textview1='QUẠT CÂY DAIICHI DC-SF6900' gia='2,000,000₫' />
                                <Buttonview1 uriname3='' textview1='QUẠT CÂY DAIICHI DC-SF6900' gia='2,000,000₫' />

                            </View>

                        }

                        horizontal={true}


                    />
               
            </View>
        </SafeAreaView>)
    }

    _getbuttom(title, imagepath ,pathbuttom) {
        return (
            
            <TouchableOpacity  onPress={pathbuttom} 
            style ={styles.view_image}>
                
                <Image style = {styles.image} source={imagepath} />
                <Text>{title}</Text>
               
            </TouchableOpacity>
        )
    }
    _Buttonview(title){

            return (
                <TouchableOpacity style= {{flexDirection :'row'}}>
                    <Image source = {require('../assets/images/img_product.png')}>
                    </Image >
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
        backgroundColor : '#FFFFFF',
        shadowOpacity :16,
        shadowRadius:50,
        shadowColor : '#000000',

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
        marginLeft: 31,
        marginRight: 39,
        flexDirection: 'row',
        justifyContent :'space-between'
      
    },
    image :{
        width:36 ,
        height:36
    },
    view_image:{
        alignContent:'center',
        alignItems:'center'
    },
    View_tichdiem:{
        flexDirection:'row'
    },
    view_textdiem :{
        flex:1
    },
    line: {
        marginLeft: 30,
        marginRight: 27,
        height: 1,
        backgroundColor: '#8B8B8B'
    },
    Buttonview1: {
        backgroundColor: '#FFFFFF',
        margin: 2,
        width: 150,
        height: 198
    },
    view_text:{
        flexDirection :'row',
        justifyContent:'space-between'
    }

})