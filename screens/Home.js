import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import BottomTab from '../components/BottomTab'
import UserAccordian from '../components/UserAccordian'

const Home = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fafafa'}}>
            <ScrollView>
            <Text>Home Page</Text>
            <UserAccordian/>
            <UserAccordian/>
            <UserAccordian/>
            <UserAccordian/>
            </ScrollView>
            <BottomTab/>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
