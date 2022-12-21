import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Spacer } from "../../../../../components/Spacer";

const PromoHeader = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal: moderateScale(10) }}>
      <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="arrow-back"
          size={moderateScale(25)}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default PromoHeader;
