import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import PhoneInput from "react-native-phone-number-input";
import { colors } from '../../../../utils/Colors';
import { scale } from 'react-native-size-matters';
import CustomText from '../../../../components/CustomText';
import { Spacer } from '../../../../components/Spacer';


const PhoneNuMain = ({phoneNumber,setPhoneNumber}) => {


    const [countryCode, setCountryCode] = useState("")


  return (
    <View>
        <PhoneInput
        defaultValue={countryCode}
        defaultCode="PK"

        onChangeText={(text) => {
          setPhoneNumber(text);
        }} 
        
        onChangeFormattedText={(text) => {
          setCountryCode(text);
           }}
        containerStyle={{
          backgroundColor: colors.lightGray,
          borderRadius: scale(8),
          width: "100%",
        }}
        textContainerStyle={{
          backgroundColor: colors.lightGray,
          borderRadius: scale(8),
        }}
      />
      <Spacer height={20}/>
      <View style={{width:"58%"}}>

      <CustomText
        label="We will send an SMS code to verify your number"
        fontSize={12}
      color={colors.lightBlack}
      fontFamily={"regular"}
      />

      </View>


    </View>
  )
}

export default PhoneNuMain

const styles = StyleSheet.create({})