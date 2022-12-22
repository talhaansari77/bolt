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
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-elements";
import { colors } from "../utils/Colors";

const CustomTextInput = ({
  eyeClick,
  password,
  setEyeClick,
  error,
  withLabel,
  inputTextColor,
  fontFamily,
  leftIcon,
  rightIcon,
  tintColor,
  onRight,
  ...props
}) => {
  return (
    <View style={{ width: props.mainWidth,marginTop:props.mainTop }}>
    
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
            borderWidth:props.borderWidth,
            alignItems: "center",
            flexDirection:"row",
            paddingLeft: props.paddingLeft,
          },
        ]}
      >
           {
            leftIcon?(
              <Image source={leftIcon} style={{width:18,height:18, }}/>

            ): <></>
          }
  
        <TextInput
          style={[
            {
              width:  rightIcon?"78%" : "95%",
              height: props.inputHeight || "100%",
              marginLeft: props.inputLeftMargin || 10,
              paddingRight: props.paddingRight || 10,
              paddingHorizontal: props.paddingHorizontal,
              fontFamily: fontFamily || "regular",
              color: inputTextColor || colors.black,
              fontSize: verticalScale(13),
            },
          ]}
          editable={props.editable}
          onChangeText={props.onChangeText}
          value={props.value}
          numberOfLines={props.numberOfLines}
          keyboardType={props.keyboardType}
          autoCapitalize="none"
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          secureTextEntry={props.secureTextEntry}
        />

{
            rightIcon?(
              <TouchableOpacity 
              activeOpacity={0.6}
              onPress={onRight}
              >
                              <Image source={rightIcon} style={{width:30,height:30,marginRight:5}}/>

                
              </TouchableOpacity>

            ): <></>
          }
      

        

        
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
