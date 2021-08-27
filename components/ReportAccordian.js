import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import upcheveron from '../assets/ch_up.png'
import downCheveron from '../assets/chdown.png'
import delete_icon from '../assets/delete.png'
import eye_icon from '../assets/eye.png'
import edit_icon from '../assets/edit.png'
const ReportAccordian = ({data}) => {
    const [open, setOpen] = useState(false);
    function truncate(str){
        let n = 11;
        return (str.length > n) ? str.substr(0, n-1) + '...' : str;
    };
    return (
        <View style={styles.mainContainer}>
            <View style={styles.mainHeader}>
                <Text style={styles.normalTxt}>{data._id.substring(data._id.length - 7)}</Text>
                <Text style={styles.normalTxt}>{truncate(data?.user?.firstName + ' ' + data?.user?.lastName)}</Text>
                {data?.results === 'negative' && <TouchableOpacity style={styles.dflex}>
                    <Text style={styles.green_txt}>Negative</Text>
                </TouchableOpacity>}
                {data?.results === 'positive' && <TouchableOpacity style={styles.dflex}>
                    <Text style={styles.red_txt}>Positive</Text>
                </TouchableOpacity>}
                {data?.results === 'pending' && <TouchableOpacity style={styles.dflex}>
                    <Text>Pending</Text>
                </TouchableOpacity>}
                <TouchableOpacity style={!open?styles.openIcon:styles.closeIcon} onPress={()=>{setOpen(!open)}}>
                    <Image source={!open?downCheveron:upcheveron}  style={{height:15, width:15}}/>
                </TouchableOpacity>
            </View>
            {open && <View style={styles.insideData}>
                <View style={styles.dflex}>
                    <Text style={styles.key}>ID             :    </Text>
                    <Text style={styles.value}>{data._id}</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Package  :    </Text>
                    <Text style={styles.value}>{data?.packageid?.packageName}</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Price        :    </Text>
                    <Text style={styles.value}>$ {data?.packageid?.price1}</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Barcode  :    </Text>
                    <Text style={styles.value}>{data?.barcode}</Text>
                </View>
                <TouchableOpacity style={styles.editBtn}>
                    <Image source={edit_icon} style={{height:15, width:15}}/>
                    <Text style={styles.editTxt}>Edit</Text>
                </TouchableOpacity>
            </View>}
        </View>
    )
}

export default ReportAccordian

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
