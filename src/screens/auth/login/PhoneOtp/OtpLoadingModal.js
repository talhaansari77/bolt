import { StyleSheet, Text, View, Modal,ActivityIndicator } from "react-native";
import React from "react";
import CustomModal from "../../../../components/CustomModal";
import { colors } from "../../../../utils/Colors";
import { verticalScale } from "react-native-size-matters";
import Lottie from "lottie-react-native";
import { Spacer } from "../../../../components/Spacer";
import CustomText from "../../../../components/CustomText";
import PercentageSpacer from "../../../../components/PercentageSpacer";

const OtpLoadingModal = ({ isVisible, setIsVisible }) => {
  return (
    <CustomModal
      isVisible={isVisible}
      onDisable={() => setIsVisible(!isVisible)}
      height={verticalScale(120)}
      width={"80%"}
      borderRadius={10}
    >
      <PercentageSpacer height={"20%"}/>
      <ActivityIndicator size={"large"} color={colors.primary}/>

      {/* <Lottie
        style={{ height: 100, alignSelf: "center" }}
        // source={require("../../../../../assets/Loader/apploading.json")}
        autoPlay
        // speed={1.5}
      /> */}
            <Spacer height={20} />

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
