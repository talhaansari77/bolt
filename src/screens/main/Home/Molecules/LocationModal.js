import { StyleSheet, Text, View, Modal, Image, Platform } from "react-native";
import React from "react";
import CustomModal from "../../../../components/CustomModal";
import { Spacer } from "../../../../components/Spacer";
import CustomText from "../../../../components/CustomText";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../utils/Colors";
import CustomButton from "../../../../components/CustomButton";
import icons from "../../../../../assets/Icons";

const LocationModal = ({ isVisible, setIsVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      activeOpacity={0}
      // backgroundColor={colors.white}
      onRequestClose={() => {
        setIsVisible(!isVisible);
      }}
    >
      <View
        style={{
          width: "100%",
          padding: 30,
          height: "55%",
          bottom: 0,
          backgroundColor: colors.white,
          position: "absolute",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          shadowOffset: { width: -2, height: -2 },
          shadowColor:  Platform.OS=="ios"? "#6c757d":colors.black,
          shadowOpacity: 0.5,
          shadowRadius: 5,
        }}
      >
        <Spacer height={verticalScale(20)} />

        <Image
          resizeMode="contain"
          source={icons.location}
          style={{ width: scale(100), height: 80, alignSelf: "center" }}
        />
        <Spacer height={verticalScale(20)} />
        <View style={{ width: "100%", paddingHorizontal: 15 }}>
          <CustomText
            label="Where are you?"
            fontFamily={"bold"}
            fontSize={18}
            alignSelf="center"
            align="center"
            textAlign="center"
          />
        </View>
        <Spacer height={verticalScale(6)} />

        <CustomText
          label="Set your location so we can pick you up at the right spot and find vehicles available around you"
          fontFamily={"regular"}
          fontSize={13}
          color={colors.lightBlack}
          alignSelf="center"
          align="center"
          textAlign="center"
        />
        <Spacer height={verticalScale(20)} />

        <CustomButton
          onPress={() => setIsVisible(false)}
          title="Set automatically"
          borderRadius={50}
        />

        <Spacer height={verticalScale(10)} />

        <CustomButton
          backgroundColor={colors.lightGray}
          color={colors.black}
          onPress={() => setIsVisible(false)}
          title="Set later"
          borderRadius={50}
        />
      </View>
    </Modal>
  );
};

export default LocationModal;

const styles = StyleSheet.create({});
