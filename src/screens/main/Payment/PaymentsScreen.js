import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import React from "react";
import TopHeader from "../../../components/TopHeader";
import commonStyles from "../../../utils/CommonStyles";
import { colors } from "../../../utils/Colors";
import BoltBalanceContainer from "./Molecules/BoltBalanceContainer";
import { Spacer } from "../../../components/Spacer";
import icons from "../../../../assets/Icons";
import AboutContainer from "../About/Molecules/AboutContainer";
import LineSeparator from "../../../components/LineSeparator";
import PaymentContainer from "./Molecules/PaymentContainer";
import PercentageSpacer from "../../../components/PercentageSpacer";


const PaymentsScreen = ({ navigation }) => {
  const AboutData = [
    { id: 1, img: icons.ride, txt: "Like us on Facebook" },
    { id: 2, img: icons.question, txt: "Solution for work rides" },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={commonStyles.container}>
      <PercentageSpacer height={Platform.OS=="android"?"5%":0}/>

        <TopHeader label="Payment" navigation={navigation} />
        <Spacer height={20} />
        {/* <RideContainer/> */}
        <BoltBalanceContainer />
        <Spacer height={20} />

        {AboutData.map((item) => {
          return (
            <AboutContainer item={item} />
            // <AboutContainer item={item}/>
          );
        })}

        <LineSeparator height={10} />
        <Spacer height={20} />

        <PaymentContainer />
      </View>
    </SafeAreaView>
  );
};

export default PaymentsScreen;

const styles = StyleSheet.create({});
