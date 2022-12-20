import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../../../../../../components/CustomText";
import { colors } from "../../../../../../utils/Colors";
import SocialButton from "../../../../../../components/SocialButton";
import icons from "../../../../../../../assets/Icons";
import { verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../../../../components/Spacer";

const EditBottomContainer = () => {
  return (
    <View>
      <CustomText
        label={
          "Your phone number can't be changed. If you want to link your account to another phone number, please contact"
        }
        fontFamily={"regular"}
        color={colors.lightBlack1}
        fontSize={11}
      />
      <CustomText
        label={"Customer Support."}
        fontFamily={"regular"}
        color={colors.primary}
        fontSize={11}
      />
      <Spacer height={20}/>
      <SocialButton
        label="CONNECT TO FACEBOOK"
        borderRadius={7}
        icon={icons.facebookwhite}
        borderWidth={-1}
        backgroundColor={"#014f86"}
        textColor={colors.white}
        height={verticalScale(45)}
        fontFamily={"bold"}
      />
    </View>
  );
};

export default EditBottomContainer;

const styles = StyleSheet.create({});
