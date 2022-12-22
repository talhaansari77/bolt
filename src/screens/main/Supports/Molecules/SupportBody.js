import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import { Spacer } from "../../../../components/Spacer";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../../../utils/Colors";
import { AntDesign } from "@expo/vector-icons";

const SupportBody = ({navigation}) => {
  return (
    <View>
      <View>
        <Spacer height={35} />
        <CustomText
          label="How can we help?"
          fontFamily={"bold"}
          fontSize={19}
        />
        <Spacer height={12} />
        <CustomText
          label="Support Cases"
          fontFamily={"semiBold"}
          fontSize={12}
        />
      </View>
      <Spacer height={15} />
      <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.navigate("InboxScreen")}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: colors.lightGray,
                width: 45,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
              }}
            >
              <MaterialIcons name="forward-to-inbox" size={24} color="black" />
            </View>
            <Spacer width={13} />
            <View>
              <CustomText label="Inbox" fontSize={13} />
              <Spacer height={3} />
              <CustomText label="View open chats" color={colors.gray} />
            </View>
          </View>

          <View>
            <AntDesign name="right" size={20} color={colors.gray} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SupportBody;
