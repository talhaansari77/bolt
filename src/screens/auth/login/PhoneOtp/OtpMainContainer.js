import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { scale, verticalScale } from "react-native-size-matters";
import PercentageSpacer from "../../../../components/PercentageSpacer";
import { Spacer } from "../../../../components/Spacer";
import OtpLoadingModal from "./OtpLoadingModal";

const OtpMainContainer = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: "58%" }}>
        <CustomText
          label="An SMS code was sent to"
          fontSize={12}
          color={colors.lightBlack}
          fontFamily={"regular"}
        />
        <CustomText
          label="+92 3418616783"
          fontSize={12}
          marginTop={5}
          color={colors.black}
          fontFamily={"bold"}
        />

        <CustomText
          label="Edit phone number"
          fontSize={13}
          marginTop={5}
          color={colors.primary}
          fontFamily={"bold"}
        />
      </View>
      <Spacer height={20} />
      <View style={{ height: "10%" }}>
        <OTPInputView
          pinCount={4}
          codeInputHighlightStyle={styles.highLighted}
          autoFocusOnLoad
          // onCodeChanged={(data)=>{
          //   setIsVisible(true);

          //   setTimeout(() => {
          //     setIsVisible(false);
          //     navigation.navigate("MainDrawer");
          //   }, 2000);
          // }}
          codeInputFieldStyle={styles.underlineStyleBase}
          onCodeFilled={(code) => {
            setIsVisible(true);
            // navigation.navigate("MainDrawer");


            setTimeout(() => {
              setIsVisible(false);
              navigation.navigate("MainDrawer");
            }, 2000);
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
      </View>
      <PercentageSpacer height={"20%"} />

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CustomText
          label="Resend code in "
          fontSize={13}
          marginTop={5}
          color={colors.lightBlack}
          fontFamily={"regular"}
        />
        <CustomText
          label="18"
          fontSize={13}
          marginTop={5}
          color={colors.black}
          fontFamily={"semiBold"}
        />
      </View>
      <OtpLoadingModal isVisible={isVisible} setIsVisible={setIsVisible} />
    </View>
  );
};

export default OtpMainContainer;

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: scale(65),
    height: verticalScale(40),
    borderWidth: 0,
    borderRadius: scale(5),
    backgroundColor: colors.lightGray,
    color: colors.black,
  },
  highLighted: {
    borderColor: colors.primary,
  },
});
