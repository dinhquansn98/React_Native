import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    Image,
    StyleSheet
} from 'react-native'
import R from '@R'
export default class UserScreen extends Component {
    render() {
        return (
            <SafeAreaView
                style={styles.container}>
                <View style={styles.user_info_block}>
                    <Image
                        style={styles.profile_picture}
                        source={R.images.ic_default_user}
                    />
                    <View style={styles.text_block_1}>
                        <View style={styles.txt_name_and_agency}>
                            <Text style={styles.txt_name} >
                                Nguyễn Thị Thu Phương</Text>
                            <Text style={styles.txt_agency}>
                                Đại lý</Text>
                        </View>
                        <Text style={styles.txt_edit}>
                            Chỉnh sửa thông tin</Text>
                    </View>
                </View>
                <View style={styles.user_fuction_block}>
                    {this._getFuncBlock("Đơn hàng", R.images.ic_order)}
                    {this._getFuncBlock("Cửa hàng", R.images.ic_store)}
                    {this._getFuncBlock("Lịch sử giao dịch", require("../assets/images/ic_lsdd.png"))}
                    {this._getFuncBlock("Trở thành đại lý", require("../assets/images/ic_trothanhdaily.png"))}
                    {this._getFuncBlock("Thông tin bảo hành", require("../assets/images/ic_thongtinbaohang.png"))}
                    {this._getFuncBlock("Thông tin về Daiichi", require("../assets/images/ic_ttdaiichi.png"))}
                    {this._getFuncBlock("Đăng xuất", require("../assets/images/ic_dangxuat.png"), true)}

                </View>
                <View style={styles.container2}>
                    <View style={styles.view_diem}>
                        <Text style={styles.text_diem}>Điểm tích lũy:</Text>
                        <Text style={styles.text_sodiem}>1200</Text>
                    </View>
                    <Image style={styles.img_line} source={require('../assets/images/ic_line1.png')} />
                    <View style = {styles.view_bac}>
                        <View style ={styles.line2} />
                        <Text style={styles.text_bac}>Bạc</Text>
                    </View>
                    <Text style ={ styles.text_thanhvien}>Bạn đang là thành viên bạc của Daiichi</Text>
                    <Text style= {styles.text_quyenloi}>Quyền Lợi:</Text>
                    <View style={styles.gettext}>
                        {this._getText("Chiết khấu 5% khi mua sản phẩm")}
                        {this._getText("Có nhiểu ưu đãi và chương trình")}
                    </View>
                </View>

            </SafeAreaView>
        )
    }

    // ham tra ve 1 view (function block)
    _getFuncBlock(title, imagePath, isLast = false) {
        return (
            <View>
                <View style={styles.function_block}>
                    <Image style={styles.img_func}
                        source={imagePath}
                    />
                    <Text style={styles.txt_func}> {title}</Text>
                    <Image
                        style={styles.arrow}
                        source={R.images.ic_arrow_right}
                    />
                </View>
                {!isLast && <View style={styles.line}></View>}
            </View>
        )
    }
    _getText(title) {
        return (
            <View style={styles.gettext_view}>
                <Image source={require('../assets/images/ic_dot.png')} />
                <Text style={styles.gettext_text}>{title}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF'
    },
    user_info_block: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    profile_picture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 25,
        marginVertical: 12,
        marginRight: 11
    },
    text_block_1: {
        flex: 1,
        justifyContent: 'center',
    },
    txt_name_and_agency: {
        width: '100%',
        flexDirection: 'row',
    },
    txt_name: {
        flex: 1,
        fontSize: 18,
        color: '#000000',
        marginBottom: 5,
        fontFamily: 'Roboto-Medium'
    },
    txt_agency: {
        textAlignVertical: "center",
        textAlign: 'center',
        backgroundColor: '#EA4335',
        marginRight: 10,
        paddingHorizontal: 9,
        paddingVertical: 3,
        fontSize: 17,
        borderRadius: 10,
        overflow: 'hidden',
        color: 'white',
        fontFamily: 'Roboto-Regular'
    },
    txt_edit: {
        fontSize: 14,
        color: '#707070',
        fontFamily: 'Roboto-Regular'
    },
    user_fuction_block: {
        marginTop: 5,
        marginBottom: 9,
        backgroundColor: 'white'
    },
    function_block: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 27,
        marginVertical: 12,
        alignItems: 'center'
    },
    img_func: {
        width: 22,
        height: 22,
        resizeMode: 'contain'
    },
    txt_func: {
        marginLeft: 17,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        flex: 1
    },
    arrow: {
        width: 10,
        height: 18
    },
    line: {
        marginLeft: 30,
        marginRight: 27,
        height: 2,
        backgroundColor: '#8B8B8B'
    },
    container2: {
        backgroundColor: '#FFFFFF',
        marginTop: 9
    },
    view_diem: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginTop: 6,
        marginLeft: 123,
        marginRight: 122
    },
    text_diem: {
        fontSize: 14,
        color: '#EA4335'
    },
    text_sodiem: {
        fontSize: 18,
        color: '#EA4335',
        marginLeft: 6
    },
    img_line: {
        marginLeft: 22,
        marginTop: 18,
        marginRight: 22
    },
    gettext: {
        marginLeft: 77,
        marginRight: 77,
        marginTop: 5,

    },
    gettext_view: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    gettext_img: {

    },
    gettext_text: {
        marginLeft: 5
    },
    text_bac: {
        textAlignVertical: "center",
        textAlign: 'center',
        backgroundColor: '#EA4335',
        marginRight: 64,
        marginLeft :64,
        paddingHorizontal: 9,
        paddingVertical: 3,
        fontSize: 16,
        borderRadius: 2,
        overflow: 'hidden',
        color: 'white',
        fontFamily: 'Roboto-Regular',
        
    },
    line2: {

        backgroundColor: '#FF0000',
        height:1,
       
      
    },
    view_bac :{
        marginTop:18 ,
        marginLeft :97 ,
        marginRight:89
    },
    text_thanhvien :{
        marginLeft:68 ,
        marginRight:67,
        marginTop :16,
        fontSize :14
    },
    text_quyenloi:{
        marginRight:156,
        marginLeft:157,
        marginTop:5,
        fontSize :14,
        fontFamily :'Medium'
    }
})


