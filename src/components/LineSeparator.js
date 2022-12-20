import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { verticalScale } from 'react-native-size-matters'
import { colors } from '../utils/Colors'

const LineSeparator = ({width,height}) => {
  return (
    <View style={{width:width,height:verticalScale( height || 1),backgroundColor:colors.lightGray}}/>
    
  )
}

export default LineSeparator

const styles = StyleSheet.create({})