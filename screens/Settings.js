import React from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import BottomTab from '../components/BottomTab'
import { logoutAction } from '../store/action'

const Settings = ({navigation, logoutAction}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#fafafa'}}>
            <View style={{ paddingHorizontal: 10 }}>
                <View style={styles.header}>
                    <View style={styles.headerPart1}>
                        <Text style={styles.headerTxt1}>Settings</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.longBtn} onPress={logoutAction}>
                    <Text style={styles.btnTxt}>Logout</Text>
                </TouchableOpacity>
            </View>
            <BottomTab navigation={navigation} current={5}/>
        </SafeAreaView>
    )
}

export default connect(null, {logoutAction})(Settings)

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20
    },
    headerPart1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTxt1: {
        color: '#2e2e2c',
        fontSize: 18,
        fontWeight: '700',
        marginRight: 7
    },
    longBtn:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 4,
        elevation: 1
    },
    btnTxt:{
        color: '#2e2e2c',
        fontSize: 14,
        fontWeight: '500',
        marginRight: 7
    }
})
