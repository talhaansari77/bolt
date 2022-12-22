import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomText from "../../../../components/CustomText";
import PhoneInput from "react-native-phone-number-input";
import { colors } from "../../../../utils/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../../components/Spacer";
import SepratorLine from "../../../../components/SepratorLine";
import SocialButton from "../../../../components/SocialButton";
import icons from "../../../../../assets/Icons";
import PercentageSpacer from "../../../../components/PercentageSpacer";

const LoginMainContainer = ({navigation}) => {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")


  return (
    <>
      <CustomText
        label="Enter your number"
        fontFamily={"bold"}
        fontSize={16}
        alignSelf="center"
      />
      <Spacer height={15} />
      {/* <View style={{ width: "100%", }}> */}
      <PhoneInput
        defaultValue={countryCode}
        defaultCode="PK"
        value={countryCode}
        onChangeText={(text) => {
          setPhoneNumber(text);
        }}      
          onChangeFormattedText={(text) => {
          setCountryCode(text);
          navigation.navigate("PhoneNumber")     
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
      {/* </View> */}

      <Spacer height={20} />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <SepratorLine height={0.7} width={"44%"} />
        <CustomText
          label="OR"
          marginLeft={7}
          marginRight={7}
          fontSize={13}
          color={colors.halfGray}
          fontFamily={"semiBold"}
        />
        <SepratorLine height={0.7} width={"44%"} />
      </View>
      <Spacer height={20} />

      <SocialButton label="Sign in with Google" icon={icons.google} />
      <Spacer height={10} />

      <SocialButton label="Sign in with facebook" icon={icons.facebook} />

      </>

  );
};

export default LoginMainContainer;

const styles = StyleSheet.create({});
