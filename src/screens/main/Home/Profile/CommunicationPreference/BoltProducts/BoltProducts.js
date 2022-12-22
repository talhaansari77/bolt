import { View, Text } from "react-native";
import React from "react";
import CommunicationHeader from "../../../../../../components/CommunicationComponent/CommunicationHeader";
import { Spacer } from "../../../../../../components/Spacer";
import CommunicationBody from "../../../../../../components/CommunicationComponent/CommunicationBody";

const BoltProducts = () => {
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
        name="Bolt's Products"
        subName={
          "If you're not a user of our other products, we'll send you offers we think you might like."
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

export default BoltProducts;
