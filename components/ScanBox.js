import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const ScanBox = ({deducedValue}) => {
    const onSuccess = (e) => {
        deducedValue(e.data)
    }
    return (
        <QRCodeScanner
            onRead={onSuccess}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
                <Text style={styles.centerText}>
                    Point the camera towards barcode.
                </Text>
            }
            cameraStyle={{width: widthPercentageToDP(90)}}
            showMarker={true}
            containerStyle={{padding: widthPercentageToDP(5)}}
            cameraProps={{
                ratio: `4:3`
            }}
        />
    )
}

export default ScanBox

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
})
