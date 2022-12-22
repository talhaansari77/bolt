import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import LineSeparator from "../../../../components/LineSeparator";
import commonStyles from "../../../../utils/CommonStyles";
import icons from "../../../../../assets/Icons";
import { Spacer } from "../../../../components/Spacer";

const AboutContainer = ({item,onPress}) => {
  return (
    <View>
      <TouchableOpacity 
      activeOpacity={0.6}
      onPress={onPress}
      style={{ flexDirection: "row",
      alignItems: "center",
    }}
      >

        <View style={commonStyles.imgContainer}>
          <Image
            resizeMode="contain"
        style={{...commonStyles.img,tintColor:colors.lightBlack1}}
            source={item.img}
          />
        </View>
        <Spacer width={15} />
        <CustomText
          label={item.txt}
          fontFamily={"semiBold"}
          color={colors.lightBlack1}
          fontSize={13}
        />
      </TouchableOpacity>
      <LineSeparator  />
      <Spacer height={15} />
    </View>
  );
};

export default AboutContainer;

const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow:"wrap",    
    marginBottom: verticalScale(10),
  },
});
