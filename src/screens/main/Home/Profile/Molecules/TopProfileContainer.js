import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ProfileImg from "../../../../../components/ProfileImg";
import CustomText from "../../../../../components/CustomText";
import { colors } from "../../../../../utils/Colors";
import { Spacer } from "../../../../../components/Spacer";
import CustomButton from "../../../../../components/CustomButton";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Fontisto } from "@expo/vector-icons";
import LineSeparator from "../../../../../components/LineSeparator";
import { useNavigation } from "@react-navigation/native";

const TopProfileContainer = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <ProfileImg width={60} height={60} iconSize={16} />
        <Spacer height={10} />

        <CustomText
          label={"awais abbas"}
          fontFamily={"bold"}
          color={colors.black}
          fontSize={18}
          textAlign="center"
          marginBottom={3}
        />
        <CustomText
          label={"+923418616783"}
          fontFamily={"semiBold"}
          color={colors.gray1}
          fontSize={12}
          textAlign="center"
        />
        <Spacer height={20} />
      </View>
      <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.navigate("EmailReceipts")} >
      <View style={styles.mailContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Fontisto
            name="email"
            size={moderateScale(20)}
            color={colors.lightBlack1}
          />
          <CustomText
            label={"awaisabbas719@gmail.com"}
            fontFamily={"semiBold"}
            color={colors.lightBlack1}
            fontSize={12}
            textAlign="center"
            marginLeft={10}
          />
        </View>
        <CustomButton
          title="VERIFY"
          fontSize={14}
          borderRadius={50}
          width={70}
          height={verticalScale(18)}
        />
      </View>
      </TouchableOpacity>
      <Spacer height={20}/>

      <LineSeparator height={6}/>
    </View>
  );
};

export default TopProfileContainer;

const styles = StyleSheet.create({
  mailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
