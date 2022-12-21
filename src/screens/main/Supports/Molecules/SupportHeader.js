import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import CustomText from "../../../../components/CustomText";
import { Spacer } from "../../../../components/Spacer";


const SupportHeader = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: "#f3f3f3",
        height: Platform.OS == "ios" ? 120 : 105,
        paddingTop:Platform.OS == "ios" ? 70 : 55,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.27,
        shadowRadius: 2.49,

        elevation: 12,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "auto",
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()} >
        <Entypo name="cross" size={30} color="black" />
        </TouchableOpacity>
        <Spacer width={25} />
        <CustomText label="Get Help" fontSize={15} fontFamily={"bold"} />
      </View>
    </View>
  );
};

export default SupportHeader;
