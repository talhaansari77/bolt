import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import CustomText from './CustomText';
import { moderateScale } from 'react-native-size-matters';
import { Spacer } from './Spacer';

const TopHeader = ({label,navigation}) => {
  return (
  
    <View >
      <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="arrow-back"
          size={moderateScale(25)}
          color="black"
        />
      </TouchableOpacity>
      <Spacer height={20}/>
      <CustomText
        label={label}
        fontFamily={"bold"}
        fontSize={18}
        marginLeft={10}
      />

    </View>
  )
}

export default TopHeader

const styles = StyleSheet.create({})