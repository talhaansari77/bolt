import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { moderateScale, scale } from "react-native-size-matters";
import { MaterialIcons } from "@expo/vector-icons";
import commonStyles from "../utils/CommonStyles";
import icons from "../../assets/Icons";
import { colors } from "../utils/Colors";
import { Feather } from "@expo/vector-icons";

const ProfileHeader = ({
  label,
  navigation,
  onEdit,
  edit,
  leftIcon,
  onAdd,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
        >
          {leftIcon ? (
            <Image
              source={leftIcon}
              style={{ width: 15, height: 15, tintColor: colors.black }}
            />
          ) : (
            <MaterialIcons
              name="arrow-back"
              size={moderateScale(25)}
              color="black"
            />
          )}
        </TouchableOpacity>
        <CustomText
          label={label}
          fontFamily={"bold"}
          fontSize={15}
          marginLeft={20}
          alignSelf="center"
        />
      </View>

      {edit ? (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onEdit}
          style={commonStyles.imgContainer}
        >
          <Image
            resizeMode="contain"
            style={{
              ...commonStyles.img,
            }}
            source={icons.edit}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity activeOpacity={0.6} onPress={onAdd}>
          <Feather name="plus" size={moderateScale(25)} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
