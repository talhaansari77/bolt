import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "../../../../../../components/CustomText";
import { Spacer } from "../../../../../../components/Spacer";
import LineSeparator from "../../../../../../components/LineSeparator";
import { colors } from "../../../../../../utils/Colors";

const PreferenceContainer = ({ item, onPress }) => {
  return (
    <View>
      <Spacer height={15} />

      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
      >
        <CustomText label={item} fontSize={13} marginLeft={10} />
        <Spacer height={15} />
        <LineSeparator height={1} />
      </TouchableOpacity>
    </View>
  );
};

export default PreferenceContainer;

const styles = StyleSheet.create({});
