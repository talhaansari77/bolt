import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Spacer } from "../../../../components/Spacer";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const SupportBottom = ({ navigation }) => {
  const SupportList = [
    {
      id: 1,
      name: "About Bolt",
      onPress: () => navigation.navigate("AboutSupport"),
    },
    {
      id: 2,
      name: "App and features",
      onPress: () => navigation.navigate("AppsAndFeatures"),
    },
    {
      id: 3,
      name: "Account and data",
    },
    {
      id: 4,
      name: "Payments and pricing",
    },
    {
      id: 5,
      name: "Using Bolt",
    },
  ];

  return (
    <View>
      <Spacer height={10} />
      <CustomText
        fontSize={11}
        label="Get help with something else"
        fontFamily="semiBold"
      />

      <View>
        <Spacer height={13} />

        {SupportList.map((item, index) => (
          <View>
            <TouchableOpacity onPress={item.onPress} activeOpacity={0.6}>
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
                    <CustomText label={item.name} fontSize={13.5} />
                  </View>
                </View>

                <View>
                  <AntDesign name="right" size={20} color={colors.gray1} />
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
        ))}
      </View>
    </View>
  );
};

export default SupportBottom;
