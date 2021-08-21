import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import upcheveron from '../assets/ch_up.png'
import downCheveron from '../assets/chdown.png'
import delete_icon from '../assets/delete.png'
import eye_icon from '../assets/eye.png'
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
                    <Text style={styles.key}>ID :</Text>
                    <Text style={styles.value}>APT0013</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Email :</Text>
                    <Text style={styles.value}>weandd@gmail.com</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Date :</Text>
                    <Text style={styles.value}>22 Feb 2021</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Time :</Text>
                    <Text style={styles.value}>09:50 PM</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Result :</Text>
                    <Text style={styles.value}>Negative</Text>
                </View>
                
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

        paddingBottom: 15,
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 2
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
        color: '#474747'
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
        
    }
})
