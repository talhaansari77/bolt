import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { colors } from "react-native-elements";
import commonStyles from "../../../../utils/CommonStyles";
import PhoneNuHeader from "./PhoneNuHeader";
import PhoneNuMain from "./PhoneNuMain";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/CustomButton";
import PercentageSpacer from "../../../../components/PercentageSpacer";

const PhoneNumber = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={commonStyles.container}>
        <PhoneNuHeader navigation={navigation}
        label="Enter your number"
         />
        <Spacer height={20} />

        <PhoneNuMain />
        <PercentageSpacer height={"60%"}/>

        <CustomButton 
        onPress={()=> navigation.navigate("MainStack",{screen:"MainDrawer"})}
        title="Continue"  borderRadius={50}/>
      </View>
    </SafeAreaView>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({});
