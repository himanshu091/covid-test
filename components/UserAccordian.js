import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import upcheveron from '../assets/ch_up.png'
import downCheveron from '../assets/chdown.png'
import delete_icon from '../assets/delete.png'
import eye_icon from '../assets/eye.png'
import edit_icon from '../assets/edit.png'
import scan_icon from '../assets/scan.png'
import moment from 'moment'
const UserAccordian = ({data, openQrScanner}) => {
    const [open, setOpen] = useState(false)
    function truncate(str){
        let n = 13;
        return (str.length > n) ? str.substr(0, n-1) + '...' : str;
    };
    return (
        <View style={styles.mainContainer}>
            <View style={styles.mainHeader}>
                <Text style={styles.normalTxt}>{data._id.substring(data._id.length - 7)}</Text>
                <Text style={styles.normalTxt}>{truncate(data?.user?.firstName + ' ' + data?.user?.lastName)}</Text>
                <TouchableOpacity style={styles.dflex}>
                    <Image source={eye_icon} style={{height:15, width:15}}/>
                    <Text style={styles.green_txt}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dflex}>
                    <Image source={delete_icon} style={{height:15, width:15}}/>
                    <Text style={styles.red_txt}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={!open?styles.openIcon:styles.closeIcon} onPress={()=>{setOpen(!open)}}>
                    <Image source={!open?downCheveron:upcheveron}  style={{height:15, width:15}}/>
                </TouchableOpacity>
            </View>
            {open && <View style={styles.insideData}>
                <View style={styles.dflex}>
                    <Text style={styles.key}>ID        :    </Text>
                    <Text style={styles.value}>{data._id.substring(data._id.length - 7)}</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Email  :    </Text>
                    <Text style={styles.value}>{data?.user?.email}</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Date    :    </Text>
                    <Text style={styles.value}>{moment(data?.bookedFor).format('DD MMM YYYY')}</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Time   :    </Text>
                    <Text style={styles.value}>{moment(data?.bookedFor).format('LT')}</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Result :    </Text>
                    {data?.results === 'negative' && <Text style={[styles.value, {color:'#6da06d'}]}>Negative</Text>}
                    {data?.results === 'positive' && <Text style={[styles.value, {color:'#de273a'}]}>Positive</Text>}
                    {data?.results === 'pending' && <Text style={[styles.value]}>Pending</Text>}
                </View>
                <View style={[styles.dflex, styles.status]}>
                    <Text style={styles.key}>Status:</Text>
                    {data?.approved && <Text style={[styles.value, {color:'#6da06d'}]}>Approved</Text>}
                    {!data?.approved && <Text style={[styles.value, {color:'#6da06d'}]}>-</Text>}
                </View>
                <TouchableOpacity style={styles.editBtn}>
                    <Image source={edit_icon} style={{height:15, width:15}}/>
                    <Text style={styles.editTxt}>Edit</Text>
                </TouchableOpacity>
                {!data?.approved && <TouchableOpacity style={styles.scanBtn} onPress={openQrScanner}>
                    <Image source={scan_icon} style={{height:35, width:35}}/>
                </TouchableOpacity>}
            </View>}
        </View>
    )
}

export default UserAccordian

const styles = StyleSheet.create({
    dflex: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    mainHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',

        
    },
    green_txt:{
        color: '#499b4a',
        fontWeight: '700'
    },
    red_txt:{
        color: '#e42538',
        fontWeight: '700'
    },
    normalTxt:{
        fontWeight: '700',
        color: '#4f4f4f',
        textTransform: 'capitalize'
    },
    openIcon:{
        backgroundColor: '#e3f0f6',
        padding: 6,
        borderRadius: 50
    },
    closeIcon:{
        backgroundColor: '#ebebeb',
        padding: 6,
        borderRadius: 50
    },
    mainContainer:{
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingHorizontal: 10,
        paddingBottom: 15,
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 2
    },
    insideData:{
        marginTop: 7
    },
    key:{
        color: '#b7b7b7',
        fontWeight: '700'
    },
    value:{
        color: '#4e4e4c',
        fontWeight: '700'
    },
    status:{
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    scanBtn:{
        position: 'absolute',
        top: 35,
        right: 0,

        flexDirection: 'row',
        alignItems: 'center'
    },
    editBtn:{
        position: 'absolute',
        top: 0,
        right: 0,

        flexDirection: 'row',
        alignItems: 'center'
    },
    editTxt:{
        color: '#518ac0',
        fontWeight: '700'
    }
})
