import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Spacer } from "../Spacer";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../utils/Colors";
import CustomText from "../CustomText";
import ToggleSwitch from "toggle-switch-react-native";

const CommunicationBody = (props) => {
  const [isOn, setisOn] = useState(true);
  return (
    <View style={{ width: "auto", paddingHorizontal: 15 }}>
      <TouchableOpacity activeOpacity={0.6}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Spacer width={13} />
            <View>
              <CustomText label={props.name} fontSize={13.5} />
            </View>
          </View>

          <View>
            <ToggleSwitch
              isOn={isOn}
              onColor={"#F4FFF4"}
              // offColor={colors.secondary}
              // trackOnStyle={{color: colors.black}}
              thumbOnStyle={{ backgroundColor: colors.orange }}
              thumbOffStyle={{ backgroundColor: colors.gray }}
              trackOnStyle={{backgroundColor: colors.lightOrange}}
              // thumbOffStyle={colors.primary}
              size="medium"
              onToggle={() => {
                setisOn(!isOn);
              }}
            />
          </View>
        </View>
        <Spacer height={12} />
        <View
          style={{
            height: 0.7,
            width: "100%",
            backgroundColor: colors.gray,
          }}
        />
        <Spacer height={13} />
      </TouchableOpacity>
    </View>
  );
};

export default CommunicationBody;
