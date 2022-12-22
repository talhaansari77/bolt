import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { scale, ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";

const BoltBalanceContainer = () => {
  return (
    <View>
      <View style={styles.balanceContainer}>
        <CustomText
          label={"Bolt Balance"}
          fontFamily={"semiBold"}
          color={colors.lightBlack1}
          fontSize={13}
          textAlign="center"
          marginTop={5}
        />
        <CustomText
          label={"ORs"}
          fontFamily={"bold"}
          color={colors.black}
          fontSize={16}
          textAlign="center"
          marginTop={5}
        />
      </View>
    </View>
  );
};

export default BoltBalanceContainer;

const styles = ScaledSheet.create({
  balanceContainer: {
    width: "100%",
    height: verticalScale(70),
    borderRadius: scale(5),
    borderRadius: 6,
    backgroundColor: colors.primary,
    padding: scale(10),
  },
});
