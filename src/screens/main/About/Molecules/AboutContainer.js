import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { verticalScale } from "react-native-size-matters";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import LineSeparator from "../../../../components/LineSeparator";
import commonStyles from "../../../../utils/CommonStyles";
import icons from "../../../../../assets/Icons";
import { Spacer } from "../../../../components/Spacer";

const AboutContainer = ({item}) => {
  return (
    <View>
      <TouchableOpacity 
      activeOpacity={0.6}
      onPress={item.onPress}
      style={styles.mainContainer}>
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

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow:"wrap",    
    marginBottom: verticalScale(10),
  },
});
