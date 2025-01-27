import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import BottomTab from '../components/BottomTab'
import ReportAccordian from '../components/ReportAccordian'
import search_icon_blue from '../assets/search_icon_blue.png'
import { getAllReports } from '../utils/api'
import { FlatList } from 'react-native'
const Reports = ({navigation}) => {
    const [query, setQuery] = useState("")
    const [reports, setReports] = useState(null)
    const [loading, setloading] = useState(false)
    useEffect(() => {
        fetchAllReports()
    }, [])
    const handleSubmit = () => {

    }
    const fetchAllReports = async () => {
        const res = await getAllReports();
        // console.log("Reports",JSON.stringify(res.reports))
        setReports(res.reports)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fafafa'}}>
            <View style={{ paddingHorizontal: 10 }}>
                <View style={styles.header}>
                    <View style={styles.headerPart1}>
                        <Text style={styles.headerTxt1}>Reports</Text>
                        <Text style={styles.headerTxt2}>(Total {reports?.length}+)</Text>
                    </View>
                </View>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setQuery}
                        value={query}
                        placeholder="Search the place..."

                        onSubmitEditing={() => { handleSubmit(); }}
                        blurOnSubmit={false}
                    />
                    <TouchableOpacity style={styles.searchBtn} onPress={() => { handleSubmit(); }}>
                        <Image source={search_icon_blue} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.thead}>
                    <TouchableOpacity>
                        <Text style={styles.th}>ID</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.th}>Name</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.th}>Results</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.th}></Text>
                    </View>
                </View>
            </View>
            
            <SafeAreaView style={{ paddingHorizontal: 10 }}>

                {reports && <FlatList
                    style={{marginBottom: 260}}
                    data={reports}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        if(item.barcode.toLowerCase().includes(query)){
                            return <ReportAccordian key={item._id} data={item} updatePage={fetchAllReports}/>
                        }
                    }}
                    onRefresh={fetchAllReports}
                    refreshing={loading}
                />}
            </SafeAreaView>
            <BottomTab navigation={navigation} current={2}/>
        </SafeAreaView>
    )
}

export default Reports

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
    headerTxt2: {
        color: '#b4b4b4',
        fontSize: 12,
        fontWeight: '700'
    },
    headerBtn: {
        borderRadius: 25,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 5,

        elevation: 11
    },
    btnTxt: {
        color: '#3585a9',
        fontWeight: '700',
        fontSize: 15,
    },
    searchBtn: {
        backgroundColor: '#edf8ff',
        borderRadius: 70,
        paddingHorizontal: 12,
        paddingVertical: 12,
        margin: 5
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        paddingLeft: 5,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#f3f3f3',
        borderRadius: 8,
        marginBottom: 20
    },
    input: {
        width: '75%',
    },
    thead:{
        backgroundColor: '#003686',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    th:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
})
