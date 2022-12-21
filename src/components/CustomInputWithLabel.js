import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { colors } from "../utils/Colors";
import CustomText from "./CustomText";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const CustomInputWithLabel = ({
  eyeClick,
  password,
  setEyeClick,
  error,
  withLabel,
  ...props
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        disabled={!props.onPress}
        style={[
          {
            width: props.width || "100%",
            height: props.height || verticalScale(50),
            borderRadius: props.borderRadius || moderateScale(15),
            backgroundColor: props.backgroundColor || colors.lightGray,
            marginTop: props.marginTop || verticalScale(0),
            borderColor: props.borderColor,
            paddingLeft: props.paddingLeft,
            paddingTop: props.paddingTop,
            borderWidth: props.borderWidth,
          },
        ]}
      >
        <CustomText
          label={props.label}
          fontSize= {props.fontSizelabel || verticalScale(10)}
          color={ props.labelColor || colors.lightBlack1}
          fontFamily={ props.fontFamilyLabel || "semiBold"}
          marginTop={verticalScale(5)}
        />
        <TextInput
          style={[
            {
              width: "95%",
              //   height: props.inputHeight || "100%",
              //   marginLeft: props.inputLeftMargin || 10,
              paddingRight: props.paddingRight || 10,
              paddingHorizontal: props.paddingHorizontal,
              fontFamily: props.TextInputfontFamily || "semiBold",
              color: colors.black,
              fontSize: verticalScale(13),
            },
          ]}
          onChangeText={props.onChangeText}
          value={props.value}
          numberOfLines={props.numberOfLines}
          keyboardType={props.keyboardType}
          autoCapitalize="none"
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          secureTextEntry={props.secureTextEntry}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomInputWithLabel;

const styles = StyleSheet.create({});
