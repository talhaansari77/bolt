import { View, Text, SafeAreaView, Platform } from "react-native";
import React from "react";
import { Spacer } from "../../../../../components/Spacer";
import CustomText from "../../../../../components/CustomText";
import CustomInputWithLabel from "../../../../../components/CustomInputWithLabel";
import { colors } from "../../../../../utils/Colors";
import CustomTextInput from "../../../../../components/CustomTextInput";
import ReceipteHeader from "./Molecules/ReceipteHeader";
import ReceipteFooter from "./Molecules/ReceipteFooter";
import PercentageSpacer from "../../../../../components/PercentageSpacer";
import { useNavigation } from "@react-navigation/native";


const EmailReceipts = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
    {/* <PercentageSpacer height={Platform.OS=="android"?"5%":0}/> */}
      <ReceipteHeader navigation={navigation} />
      <Spacer height={25} />
      <View style={{ width: "auto", paddingHorizontal: 22 }}>
        <CustomText label="Email for receipts" fontFamily="bold" fontSize={20} />
        <Spacer height={25} />
        <CustomTextInput
          width={"100%"}
          height={60}
          borderRadius={10}
          backgroundColor={colors.lightWhite}
          value={"awaisabbas719@gmail.com"}
          inputTextColor={colors.black}
          paddingLeft={10}
          fontFamily={"regular"}
        />
        <Spacer height={12} />
        <CustomText
          fontSize={12}
          marginTop={5}
          label="We'll send an email to verify your address."
          color={colors.lightBlack}
        />
      </View>
      <PercentageSpacer height={"60%"}/>
      <ReceipteFooter />

     
    </SafeAreaView>
  );
};

export default EmailReceipts;
