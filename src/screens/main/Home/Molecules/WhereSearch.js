import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Spacer } from "../../../../components/Spacer";
import { colors } from "../../../../utils/Colors";
import { verticalScale } from "react-native-size-matters";
import icons from "../../../../../assets/Icons";
import CustomText from "../../../../components/CustomText";

const WhereSearch = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
      activeOpacity={0.6}
      onPress={()=>navigation.navigate("YourRoutes")}
       style={styles.searchContainer}>
        <View style={styles.iconContainer}>
          <Image source={icons.search} style={{ width: 20, height: 20 }} />
        </View>

        <CustomText
          label="Where to?"
          fontSize={16}
          marginLeft={10}
          fontFamily="bold"
        />
      </TouchableOpacity>
    </View>
  );
};

export default WhereSearch;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "13%",
    bottom: 0,
    backgroundColor: colors.white,
    position: "absolute",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowOffset: { width: -2, height: -2 },
    shadowColor: Platform.OS == "ios" ? "#6c757d" : colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    padding: 20,
  },
  searchContainer: {
    width: "100%",
    height: verticalScale(45),
    backgroundColor: colors.lightGray,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#ced4da",
    padding: 10,
  },
});
