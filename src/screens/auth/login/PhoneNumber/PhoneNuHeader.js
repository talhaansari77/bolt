import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";

const PhoneNuHeader = ({ navigation,label }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="arrow-back"
          size={moderateScale(25)}
          color="black"
        />
      </TouchableOpacity>
      <CustomText
        label={label}
        fontFamily={"bold"}
        fontSize={15}
        marginLeft={20}
        alignSelf="center"
      />

    </View>
  );
};

export default PhoneNuHeader;

const styles = StyleSheet.create({});
