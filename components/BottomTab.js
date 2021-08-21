import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import search from '../assets/search_icon.png'
import bell from '../assets/bell.png'
import calander from '../assets/calander.png'
import settings from '../assets/settings.png'
import home from '../assets/home.png'
const BottomTab = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.eachItem}>
                <Image source={search} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eachItem}>
                <Image source={calander} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.specialItem}>
                <Image source={home} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eachItem}>
                <Image source={bell} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eachItem}>
                <Image source={settings} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom: 0,
        left: 0,

        backgroundColor: '#fff',
        height: 70,
        width: '100%',

        elevation: 11,

        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    eachItem:{
        padding: 10,
    },
    icon:{
        height: 30,
        width: 30
    },
    specialItem:{
        backgroundColor: '#0085c2',
        borderRadius: 50,
        padding: 10,
        marginBottom: 10
    }
})
