import { View, Text } from "react-native";
import React from "react";
import { Spacer } from "../../../../../../components/Spacer";
import CommunicationHeader from "../../../../../../components/CommunicationComponent/CommunicationHeader";
import CommunicationBody from "../../../../../../components/CommunicationComponent/CommunicationBody";

const Travelling = () => {
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
      <Spacer height={45} />
      <CommunicationHeader
        name="Travelling"
        subName={
          "Receive local transportation suggestions based on your location when abroad"
        }
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

export default Travelling;
