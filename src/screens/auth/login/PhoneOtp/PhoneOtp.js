import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import commonStyles from "../../../../utils/CommonStyles";
import { colors } from "../../../../utils/Colors";
import PhoneNuHeader from "../PhoneNumber/PhoneNuHeader";
import OtpMainContainer from "./OtpMainContainer";
import { Spacer } from "../../../../components/Spacer";


const PhoneOtp = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={commonStyles.container}>
        <PhoneNuHeader  navigation={navigation} label="Enter code" />
        <Spacer height={20}/>

        <OtpMainContainer navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};

export default PhoneOtp;

const styles = StyleSheet.create({});
