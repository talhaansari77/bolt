import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { verticalScale } from 'react-native-size-matters'
// import { colors } from '../../Utils/Colors'
import { colors } from '../utils/Colors'

const SepratorLine = ({height,width}) => {
  return (
    <View style={{width: width|| "46%",height:verticalScale( height || 1),backgroundColor:colors.gray1}}>
    </View>
  )
}

export default SepratorLine

const styles = StyleSheet.create({})