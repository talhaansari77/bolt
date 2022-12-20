import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '../../../../../components/CustomText'
import { colors } from '../../../../../utils/Colors'
import { Spacer } from '../../../../../components/Spacer'
import LineSeparator from '../../../../../components/LineSeparator'
import commonStyles from '../../../../../utils/CommonStyles'
import icons from '../../../../../../assets/Icons'
import { verticalScale } from 'react-native-size-matters'

const ProfileBottom = () => {
  return (
    <View>
   <CustomText
          label={"Language"}
          fontFamily={"semiBold"}
          color={colors.lightBlack1}
          fontSize={16}
          textAlign="center"
          marginBottom={5}
        />   
           <CustomText
          label={"English - US"}
          fontFamily={"semiBold"}
          color={colors.gray1}
          fontSize={12}
          textAlign="center"
          marginBottom={3}
        /> 
        <Spacer height={30}/>
        <CustomText
          label={"Communication preference"}
          fontFamily={"semiBold"}
          color={colors.lightBlack1}
          fontSize={13}
          textAlign="center"
        /> 
        <Spacer height={20}/>

        <LineSeparator height={6}/>
        <Spacer height={20}/>



        <TouchableOpacity
        activeOpacity={0.6}
         style={{ flexDirection: "row", alignItems: "center",marginLeft:verticalScale(10) }}>
   
   <View style={commonStyles.imgContainer}>
             <Image
               resizeMode="contain"
               style={{
                 ...commonStyles.img,
                 tintColor: colors.lightBlack1,
                 width: 30,
               }}
               source={icons.logout}
             />
           </View>
            
             <CustomText
               label={"Log out"}
               fontFamily={"semiBold"}
               color={colors.lightBlack1}
               fontSize={14}
               textAlign="center"
               marginLeft={15}
             />
           </TouchableOpacity>
         </View>
  )
}

export default ProfileBottom

const styles = StyleSheet.create({})