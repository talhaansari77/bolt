import { View, Text, SafeAreaView, Platform } from "react-native";
import React from "react";
import { Spacer } from "../../../../../components/Spacer";
import CustomText from "../../../../../components/CustomText";
import CustomInputWithLabel from "../../../../../components/CustomInputWithLabel";
import { colors } from "../../../../../utils/Colors";
import CustomTextInput from "../../../../../components/CustomTextInput";
import ReceipteHeader from "./Molecules/ReceipteHeader";
import ReceipteFooter from "./Molecules/ReceipteFooter";

const EmailReceipts = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Spacer height={Platform.OS == "ios" ? 8 : 30} />
      <ReceipteHeader navigation={navigation} />
      <Spacer height={14} />
      <View style={{ width: "auto", paddingHorizontal: 22 }}>
        <CustomText label="Email for receipts" fontFamily="bold" fontSize={20} />
        <Spacer height={12} />
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
          label="We'll send an email to verify your address."
          color={colors.lightBlack}
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-end",
          height: Platform.OS == "ios" ? 630 : 600,
        }}
      >
        <ReceipteFooter />
      </View>
    </SafeAreaView>
  );
};

export default EmailReceipts;
