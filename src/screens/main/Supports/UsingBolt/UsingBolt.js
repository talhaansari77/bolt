import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import SupportHeader from "../Molecules/SupportHeader";
import { Spacer } from "../../../../components/Spacer";
import CustomSupportHeader from "../../../../components/SupportComponent/CustomSupportHeader";
import CustomSupportBody from "../../../../components/SupportComponent/CustomSupportBody";

const UsingBolt = () => {
  const navigation = useNavigation();
  const SupportList = [
    {
      id: 1,
      name: "Ride did not happen",
    },
    {
      id: 2,
      name: "I was involve in an accident in South Africa",
    },
    {
      id: 3,
      name: "Area of operation in the UK",
    },
    {
      id: 4,
      name: "I was involve in an accident",
    },
    {
      id: 5,
      name: "Pickup longer then expected",
    },
    {
      id: 6,
      name: "My driver's vechicle was in poor condition",
    },
    {
      id: 7,
      name: "Info on COVID-19",
    },
    {
      id: 8,
      name: "I can't request a ride",
    },
    {
      id: 8,
      name: "Recovring lost items in the UK",
    },
    {
      id: 9,
      name: "How to request a delivery order in ukraine",
    },
  ];
  return (
    <View>
      <SupportHeader navigation={navigation} />
      <Spacer height={20} />
      <CustomSupportHeader name={"Using Bolt"} navigation={navigation} />
      <Spacer height={20} />
      <CustomSupportBody SupportList={SupportList} />
    </View>
  );
};

export default UsingBolt;
