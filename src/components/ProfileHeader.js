import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { moderateScale } from "react-native-size-matters";
import { MaterialIcons } from "@expo/vector-icons";
import commonStyles from "../utils/CommonStyles";
import icons from "../../assets/Icons";
import { colors } from "../utils/Colors";

const ProfileHeader = ({ label, navigation ,onEdit,edit}) => {
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
          <MaterialIcons
            name="arrow-back"
            size={moderateScale(25)}
            color="black"
          />
        </TouchableOpacity>
        <CustomText
          label={label}
          fontFamily={"bold"}
          fontSize={15}
          marginLeft={20}
          alignSelf="center"
        />
      </View>

      {
          edit?(
            <TouchableOpacity 
            activeOpacity={0.6}
            onPress={onEdit}
            style={commonStyles.imgContainer}>
              <Image
                resizeMode="contain"
                style={{
                  ...commonStyles.img,
                }}
                source={icons.edit}
              />
            </TouchableOpacity>
          ):null
      }



    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
