import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { colors } from '../../../../utils/Colors'
import { Feather } from '@expo/vector-icons'; 



const DrawerContainer = ({navigation}) => {
  return (
    <TouchableOpacity 
    onPress={()=>navigation.navigate("MainDrawer")}
     style={styles.mainContainer}>
<Feather name="menu" size={moderateScale(20)} color="black" />
    </TouchableOpacity>
  )
}

export default DrawerContainer

const styles = StyleSheet.create({
    mainContainer:{
        width:50,
        height:50,
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.white,
        position:"absolute",
        top:Platform.OS=="ios"?verticalScale(30): verticalScale(20),
        margin:verticalScale(20),
        shadowOffset: { width: 2, height: 2 },
        shadowColor:  Platform.OS=="ios"? "#6c757d":colors.black,
        shadowOpacity: 0.5,
        shadowRadius: 5,
    }

})