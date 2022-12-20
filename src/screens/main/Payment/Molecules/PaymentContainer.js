import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import CustomButton from "../../../../components/CustomButton";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../../components/Spacer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PaymentContainer = () => {
  const [check, setCheck] = useState(false);
  return (
    <View>
      <CustomText
        label={"Payment methods"}
        fontFamily={"bold"}
        color={colors.black}
        fontSize={12}
        textAlign="center"
      />
      <Spacer height={30} />

      <View style={styles.mailContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* <Fontisto
            name="email"
            size={moderateScale(20)}
            color={colors.lightBlack1}
          /> */}
          <MaterialCommunityIcons
            name="cash"
            size={moderateScale(30)}
            color={colors.primary}
          />
          <CustomText
            label={"Cash"}
            fontFamily={"semiBold"}
            color={colors.lightBlack1}
            fontSize={14}
            textAlign="center"
            marginLeft={10}
          />
        </View>
        <TouchableOpacity
          onPress={() => setCheck(!check)}
          style={{
            ...styles.checkContiner,
            backgroundColor: check ? colors.primary : colors.white,
          }}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentContainer;

const styles = StyleSheet.create({
  mailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkContiner: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: colors.lightBlack1,
  },
});
