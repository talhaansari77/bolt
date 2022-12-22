import { View, Text } from "react-native";
import React, { useState } from "react";
import ToggleSwitch from "toggle-switch-react-native";
import { colors } from "../../../../../../utils/Colors";
import { Spacer } from "../../../../../../components/Spacer";
import ProfileHeader from "../../../../../../components/ProfileHeader";
import CommunicationBody from "../../../../../../components/CommunicationComponent/CommunicationBody";
import CommunicationHeader from "../../../../../../components/CommunicationComponent/CommunicationHeader";

const PromotionAndTips = () => {
  const SupportList = [
    {
      id: 1,
      name: "Email",
    },
    {
      id: 2,
      name: "Push",
    },
    {
      id: 3,
      name: "SMS",
    },
  ];

  return (
    <View>
      <Spacer height={60} />
      <CommunicationHeader
        name="Promotions & Tips"
        subName={"Receive useful tips and special discounts!"}
      />
      <Spacer height={20} />
      {SupportList.map((item, index) => (
        <View>
          <CommunicationBody name={item.name} />
        </View>
      ))}
    </View>
  );
};

export default PromotionAndTips;
