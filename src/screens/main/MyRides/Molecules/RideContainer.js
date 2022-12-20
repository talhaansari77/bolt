import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import commonStyles from '../../../../utils/CommonStyles'
import icons from '../../../../../assets/Icons'
import CustomText from '../../../../components/CustomText'
import { colors } from '../../../../utils/Colors'
import { Spacer } from '../../../../components/Spacer'
import { scale, verticalScale } from 'react-native-size-matters'

const RideContainer = () => {
  return (
  
    <View style={{justifyContent:"center",alignItems:"center"}}>

    <View style={{width:70,height:40}}>
 <Image
  //  resizeMode="contain"
   style={{
     ...commonStyles.img,
     tintColor: colors.gray,
   }}
   source={icons.car}
 />

</View>
{/* <View style={{width:"45%"}}> */}
<CustomText
 label={"You don't have any rides yet"}
 fontFamily={"semiBold"}
 color={colors.gray}
 fontSize={13}
 textAlign="center"
/>

{/* </View> */}



</View>
  )
}

export default RideContainer

const styles = StyleSheet.create({})