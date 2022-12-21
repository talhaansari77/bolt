import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";
import CustomText from "../CustomText";
import { Spacer } from "../Spacer";

const CustomSupportHeader = ({ navigation, ...props}) => {
  return (
    <View style={{ width: "auto", paddingHorizontal: 20 }}>
      <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="arrow-back"
          size={moderateScale(25)}
          color="black"
        />
      </TouchableOpacity>
      <Spacer height={20} />
      <CustomText label={props.name} fontFamily={"bold"} fontSize={19} />
    </View>
  );
};

export default CustomSupportHeader;
