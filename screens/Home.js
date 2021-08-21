import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import BottomTab from '../components/BottomTab'

const Home = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fafafa'}}>
            <Text>Home Page</Text>
            <BottomTab/>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
