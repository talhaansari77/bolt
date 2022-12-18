import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../../../components/CustomText'
import { colors } from '../../../../utils/Colors'
import { PH20 } from '../../../../utils/CommonStyles'

const LoginBottom = () => {
  return (
      <PH20>

    <View
    style={{
      flexDirection: "row",
      alignItems: "center",
    }}
  >

<CustomText
      label="If you are creating a new account,"
      marginRight={3}
      fontSize={13}
      color={colors.lightBlack}
      fontFamily={"regular"}
    />
    <CustomText
      label="Terms &"
      textDecorationLine="underline"

      marginRight={3}
      fontSize={13}
      color={colors.lightBlack}
      fontFamily={"regular"}
    />


  </View>

  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
    }}
  >

<CustomText
      label="Conditions"
      marginRight={3}
      textDecorationLine="underline"
      fontSize={13}
      color={colors.lightBlack}
      fontFamily={"regular"}
    />
    <CustomText
      label="and"
      marginRight={3}
      fontSize={13}
      color={colors.lightBlack}
      fontFamily={"regular"}
    />
    <CustomText
      label="Privacy Policy"
      textDecorationLine="underline"

      marginRight={3}
      fontSize={13}
      color={colors.lightBlack}
      fontFamily={"regular"}
    />
       <CustomText
      label="will apply"
      marginRight={3}
      fontSize={13}
      color={colors.lightBlack}
      fontFamily={"regular"}
    />


  </View>

      </PH20>

   
  )
}

export default LoginBottom

const styles = StyleSheet.create({})