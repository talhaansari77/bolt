import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from "react-native-size-matters";
// import { colors } from "../utils/Colors";
import CustomText from "./CustomText";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../Utils/Colors";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-elements";

const CustomTextInput = ({
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
            backgroundColor: props.backgroundColor,
            marginTop: props.marginTop || verticalScale(0),
            borderColor: props.borderColor ,
            alignItems: "center",
            paddingLeft: props.paddingLeft,
          },
        ]}
      >
  
        <TextInput
          style={[
            {
              width:  password || eyeClick||props.mic || props.downArrow? props.inputWidth  : "95%",
              height: props.inputHeight || "100%",
              marginLeft: props.inputLeftMargin || 10,
              paddingRight: props.paddingRight || 10,
              paddingHorizontal: props.paddingHorizontal,
              fontFamily: "bold",
              color:colors.white,
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
      {error ? (
        <CustomText
          label="* "
          children={error}
          fontSize={verticalScale(8)}
          color={colors.red}
          fontWeight={"600"}
          marginTop={verticalScale(5)}
        />
      ) : null}
    </View>
  );
};
export default CustomTextInput;
const styles = ScaledSheet.create({
  icon: {
    width: "20@s",
    height: "15@vs",
    tintColor: colors.gray,
  },
});
