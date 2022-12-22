import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../../../../../../components/CustomText";
import { Spacer } from "../../../../../../components/Spacer";
import LineSeparator from "../../../../../../components/LineSeparator";
import { colors } from "../../../../../../utils/Colors";

const PreferenceContainer = ({ item }) => {
  return (
    <View>
      <Spacer height={15} />

      <CustomText label={item} 
      fontSize={13}
      marginLeft={10} />
      <Spacer height={15} />
      <LineSeparator height={1} />
    </View>
  );
};

export default PreferenceContainer;

const styles = StyleSheet.create({});
