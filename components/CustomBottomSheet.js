import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";

const CustomBottomSheet = ({children, parentRef, parentHeight}) => {
    return (
        <RBSheet
            ref={parentRef}
            closeOnDragDown={false}
            closeOnPressMask={true}
            // height={80}
            animationType='slide'
            customStyles={{
                container: {
                    ...styles.container,
                    height: parentHeight,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                },
                wrapper: {
                    backgroundColor: "#16161640"
                },
                draggableIcon: {
                    backgroundColor: "#fff"
                }
            }}
        >
            {children}
        </RBSheet>
    )
}

export default CustomBottomSheet

const styles = StyleSheet.create({})
