import { View, Text, SafeAreaView, Platform } from "react-native";
import React from "react";
import PromoHeader from "./Molecules/PromoHeader";
import { Spacer } from "../../../../components/Spacer";
import CustomInputWithLabel from "../../../../components/CustomInputWithLabel";
import { colors } from "../../../../utils/Colors";
import CustomText from "../../../../components/CustomText";
import BottomPromoCode from "./Molecules/BottomPromoCode";
import PercentageSpacer from "../../../../components/PercentageSpacer";

const PromoCode = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Spacer height={Platform.OS == "ios" ? 8 : 30} />
      <PromoHeader navigation={navigation} />
      <Spacer height={12} />
      <View style={{ width: "auto", paddingHorizontal: 22 }}>
        <CustomText label="Enter promo code" fontFamily="bold" fontSize={20} />
        <Spacer height={12} />
        <CustomInputWithLabel
          width={"100%"}
          height={60}
          borderRadius={10}
          backgroundColor={colors.lightWhite}
          borderWidth={2}
          borderColor={colors.primary}
          label={"Promo Code"}
          paddingLeft={10}
          color={colors.gray}
          TextInputfontFamily={"Regular"}
          fontSizelabel={11}
          fontFamilyLabel={"Regular"}
          labelColor={colors.lightBlack}
        />
        <Spacer height={12} />
        <CustomText
          fontSize={11}
          label="The promo will be applied to your next ride."
          color={colors.lightBlack}
        />
      </View>
      <PercentageSpacer height={"58%"}/>
      <BottomPromoCode />

     
    </SafeAreaView>
  );
};

export default PromoCode;
