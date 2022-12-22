import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import commonStyles from "../../../../../utils/CommonStyles";
import { Spacer } from "../../../../../components/Spacer";
import ProfileHeader from "../../../../../components/ProfileHeader";
import TopHeader from "../../../../../components/TopHeader";
import PreferenceContainer from "./Molecules/PreferenceContainer";
import PercentageSpacer from "../../../../../components/PercentageSpacer";
import { useNavigation } from "@react-navigation/native";

const CommunicationPreference = () => {
  const navigation = useNavigation();
  const prefData = [
    {
      id: 1,
      name: "Promotions & Tips",
      onPress: () => {navigation.navigate("PromotionAndTips"); console.log("Hello")},
    },
    {
      id: 2,
      name: "Bolt's Products",
      onPress: () => navigation.navigate("BoltProducts"),
    },
    {
      id: 3,
      name: "Travelling",
      onPress: () => navigation.navigate("Travelling"),
    },
    {
      id: 4,
      name: "Partner Offers",
      onPress: () => {navigation.navigate("PartnerOffers"); console.log("Hello")},
    },
    // "Promotions & Tips",
    // "Bolt's Products",
    // "Travelling",
    // "Partner Offers"
  ];
  return (
    <SafeAreaView style={commonStyles.container1}>
      <View style={commonStyles.container}>
        <PercentageSpacer height={Platform.OS == "android" ? "5%" : 0} />

        <TopHeader
          label={"Communication preferences"}
          navigation={navigation}
        />

        <Spacer height={20} />
        {/* <TopProfileContainer/> */}
        {prefData.map((item) => (
          <View>
            {/* <TouchableOpacity > */}
              <PreferenceContainer onPress={item.onPress} item={item.name} />
            {/* </TouchableOpacity> */}
          </View>
        ))}

        <Spacer height={20} />
        <Spacer height={20} />
      </View>
    </SafeAreaView>
  );
};

export default CommunicationPreference;

const styles = StyleSheet.create({});
