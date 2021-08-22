import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import upcheveron from '../assets/ch_up.png'
import downCheveron from '../assets/chdown.png'
import delete_icon from '../assets/delete.png'
import eye_icon from '../assets/eye.png'
import edit_icon from '../assets/edit.png'
const ReportAccordian = () => {
    const [open, setOpen] = useState(false)
    return (
        <View style={styles.mainContainer}>
            <View style={styles.mainHeader}>
                <Text style={styles.normalTxt}>TEST0001</Text>
                <Text style={styles.normalTxt}>Debra Carpenter</Text>
                {true?<TouchableOpacity style={styles.dflex}>
                    <Text style={styles.green_txt}>Negative</Text>
                </TouchableOpacity>:
                <TouchableOpacity style={styles.dflex}>
                    <Text style={styles.red_txt}>Positive</Text>
                </TouchableOpacity>}
                <TouchableOpacity style={!open?styles.openIcon:styles.closeIcon} onPress={()=>{setOpen(!open)}}>
                    <Image source={!open?downCheveron:upcheveron}  style={{height:15, width:15}}/>
                </TouchableOpacity>
            </View>
            {open && <View style={styles.insideData}>
                <View style={styles.dflex}>
                    <Text style={styles.key}>ID             :    </Text>
                    <Text style={styles.value}>TEST0001</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Package  :    </Text>
                    <Text style={styles.value}>weandd@gmail.com</Text>
                </View>
                <View style={styles.dflex}>
                    <Text style={styles.key}>Price        :    </Text>
                    <Text style={styles.value}>From $70</Text>
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
