import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import SupportHeader from "../Molecules/SupportHeader";
import { Spacer } from "../../../../components/Spacer";
import CustomSupportHeader from "../../../../components/SupportComponent/CustomSupportHeader";
import CustomSupportBody from "../../../../components/SupportComponent/CustomSupportBody";

const AppsAndFeatures = () => {
  const navigation = useNavigation();
  const SupportList = [
    {
      id: 1,
      name: "How to reserve a ride",
    },
    {
      id: 2,
      name: "How to travel with pets in Sweden",
    },
    {
      id: 3,
      name: "Travelling with pets in Finland",
    },
    {
      id: 4,
      name: "Travelling with Childern in Finland",
    },
    {
      id: 5,
      name: "Bolt Balance",
    },
    {
      id: 6,
      name: "Travelling with Childern in Spain",
    },
    {
      id: 7,
      name: "Travelling with animals in Norway",
    },
    {
      id: 8,
      name: "Travelling with animals in Malta",
    },
    {
      id: 8,
      name: "Travelling with pets in Malta",
    },
    {
        id: 9,
        name: "How to get a price estimate in Hungary",
      },
  ];
  return (
    <View>
      <SupportHeader navigation={navigation} />
      <Spacer height={20} />
      <CustomSupportHeader name={"Apps and Features"} navigation={navigation} />
      <Spacer height={20} />
      <CustomSupportBody SupportList={SupportList} />
    </View>
  );
};

export default AppsAndFeatures;
