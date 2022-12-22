import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../utils/Colors";
import TopHeader from "../../../components/TopHeader";
import commonStyles from "../../../utils/CommonStyles";
import { Spacer } from "../../../components/Spacer";
import CustomText from "../../../components/CustomText";
import PromotionContainer from "./Molecules/PromotionContainer";
import PromotionAppearCon from "./Molecules/PromotionAppearCon";
import PercentageSpacer from "../../../components/PercentageSpacer";

const PromotionsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={commonStyles.container}>
      {/* <PercentageSpacer height={Platform.OS=="android"?"5%":0}/> */}

        <TopHeader label="Promotions" navigation={navigation} />
        <Spacer height={10} />

        <Spacer height={10} />
        <PromotionContainer navigation={navigation} />
        <PercentageSpacer height={"30%"} />

        <PromotionAppearCon />
      </View>
    </SafeAreaView>
  );
};

export default PromotionsScreen;

const styles = StyleSheet.create({});
