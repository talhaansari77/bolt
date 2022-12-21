
import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "../../../../../../components/CustomButton";
import { Spacer } from "../../../../../../components/Spacer";


const ReceipteFooter = () => {
  return (
    <View>
      <View>
        <CustomButton width={"95%"} borderRadius={50} title="Verify Email" />
      </View>
      <Spacer height={10} />
    </View>
  );
};

export default ReceipteFooter;
