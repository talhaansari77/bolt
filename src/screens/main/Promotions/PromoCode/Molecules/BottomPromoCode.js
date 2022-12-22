import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "../../../../../components/CustomButton";
import { colors } from "../../../../../utils/Colors";
import { Spacer } from "../../../../../components/Spacer";
import CustomText from "../../../../../components/CustomText";
import commonStyles from "../../../../../utils/CommonStyles";
import icons from "../../../../../../assets/Icons";

const BottomPromoCode = () => {
  return (
    <View>
      <View>
        <CustomButton width={"95%"} borderRadius={50} title="Apply" />
      </View>
      <Spacer height={10} />
      <View
        style={{
          width: "94%",
          backgroundColor: colors.lightOrange,
          height: 63,
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius:7
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "auto",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              backgroundColor: colors.orange,
              width: 40,
              height: 40,
              borderRadius: 50,
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                ...commonStyles.img,
                tintColor: colors.white,
                width: 20,
                alignSelf: "center",
              }}
              source={icons.promotion}
            />
          </View>
          <View>
            <View style={{  width:"auto", paddingHorizontal:10}}>
              <CustomText label="Don't have a code yet?" fontFamily={"bold"} fontSize={11} />
              <Spacer height={2} />
              <CustomText 
              label="Get free rides" fontSize={11} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BottomPromoCode;
