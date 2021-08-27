import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import search from '../assets/search_icon.png'
import bell from '../assets/bell.png'
import calander from '../assets/calander.png'
import settings from '../assets/settings.png'
import home from '../assets/home.png'
const BottomTab = ({navigation, current}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.eachItem} onPress={()=>{}}>
                <Image source={search} style={styles.icon}/>
                {current === 1 && <View style={styles.active}></View>}
            </TouchableOpacity>
            <TouchableOpacity style={styles.eachItem} onPress={()=>navigation.navigate('Reports')}>
                <Image source={calander} style={styles.icon}/>
                {current === 2 && <View style={styles.active}></View>}
            </TouchableOpacity>
            <TouchableOpacity style={styles.specialItem}  onPress={()=>navigation.navigate('Home')}>
                <Image source={home} style={styles.icon}/>
                {current === 3 && <View style={styles.activeSpecial}></View>}
            </TouchableOpacity>
            <TouchableOpacity style={styles.eachItem} onPress={()=>{}}>
                <Image source={bell} style={styles.icon}/>
                {current === 4 && <View style={styles.active}></View>}
            </TouchableOpacity>
            <TouchableOpacity style={styles.eachItem} onPress={()=>{navigation.navigate('Settings')}}>
                <Image source={settings} style={styles.icon}/>
                {current === 5 && <View style={styles.active}></View>}
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
        flexDirection: 'column',
        alignItems:'center'
    },
    icon:{
        height: 30,
        width: 30
    },
    specialItem:{
        backgroundColor: '#0085c2',
        borderRadius: 50,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'column',
        alignItems:'center'
    },
    active:{
        height: 3,
        width: 10,
        backgroundColor: '#0085c2',
        borderRadius: 5
    },
    activeSpecial:{
        height: 3,
        width: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },
})
