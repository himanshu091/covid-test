import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import upcheveron from '../assets/ch_up.png'
import downCheveron from '../assets/chdown.png'
import delete_icon from '../assets/delete.png'
import eye_icon from '../assets/eye.png'
import edit_icon from '../assets/edit.png'
const UserAccordian = () => {
    const [open, setOpen] = useState(false)
    return (
        <View style={styles.mainContainer}>
            <View style={styles.mainHeader}>
                <Text style={styles.normalTxt}>APT0013</Text>
                <Text style={styles.normalTxt}>Debra Carpenter</Text>
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
                    <Text style={styles.value}>APT0013</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Email  :    </Text>
                    <Text style={styles.value}>weandd@gmail.com</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Date    :    </Text>
                    <Text style={styles.value}>22 Feb 2021</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Time   :    </Text>
                    <Text style={styles.value}>09:50 PM</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Result :    </Text>
                    <Text style={[styles.value, {color:'#6da06d'}]}>Negative</Text>
                    <Text style={[styles.value, {color:'#de273a'}]}>Positive</Text>
                </View>
                <View style={[styles.dflex, styles.status]}>
                    <Text style={styles.key}>Status:</Text>
                    <Text style={[styles.value, {color:'#6da06d'}]}>Approved</Text>
                </View>
                <TouchableOpacity style={styles.editBtn}>
                    <Image source={edit_icon} style={{height:15, width:15}}/>
                    <Text style={styles.editTxt}>Edit</Text>
                </TouchableOpacity>
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
        color: '#4f4f4f'
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
