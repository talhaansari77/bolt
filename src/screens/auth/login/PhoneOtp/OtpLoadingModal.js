import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";
import CustomModal from "../../../../components/CustomModal";
import { colors } from "../../../../utils/Colors";
import { verticalScale } from "react-native-size-matters";
import Lottie from "lottie-react-native";
import { Spacer } from "../../../../components/Spacer";
import CustomText from "../../../../components/CustomText";

const OtpLoadingModal = ({ isVisible, setIsVisible }) => {
  return (
    <CustomModal
      isVisible={isVisible}
      onDisable={() => setIsVisible(!isVisible)}
      height={verticalScale(150)}
      width={"80%"}
      borderRadius={10}
    >
      <Spacer height={10} />

      <Lottie
        style={{ height: 100, alignSelf: "center" }}
        source={require("../../../../../assets/Loader/apploading.json")}
        autoPlay
        // speed={1.5}
      />
      <CustomText
        label="Verifying code..."
        fontFamily={"regular"}
        fontSize={13}
        alignSelf="center"
        align="center"
        textAlign="center"
      />
    </CustomModal>
  );
};

export default OtpLoadingModal;

const styles = StyleSheet.create({});
