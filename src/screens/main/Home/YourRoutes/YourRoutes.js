import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../../../../utils/Colors";
import icons from "../../../../../assets/Icons";
import { Spacer } from "../../../../components/Spacer";
import CustomTextInput from "../../../../components/CustomTextInput";
import commonStyles from "../../../../utils/CommonStyles";
import ProfileHeader from "../../../../components/ProfileHeader";
import { verticalScale } from "react-native-size-matters";
import PercentageSpacer from "../../../../components/PercentageSpacer";

const YourRoutes = ({ navigation }) => {
  const [check, setCheck] = useState(false);

  const [counter, setCounter] = useState(0);

  useEffect(() => {}, [, counter]);

  const [routsData, setRoutsData] = useState([
    { id: 1, placeholder: "College Road" },
    { id: 2, placeholder: "Destination" },
  ]);
  const OnAddDestination = () => {
    let temp = [];
    setCounter(counter + 1);

    console.log("dataLenght", routsData.length);
    if (routsData.length > 3) {
    } else {
      routsData.push({
        id: 2 + 1,
        placeholder: "Add shop",
        cross: icons.cross,
      });
    }
  };

  const OnRemoveDestination = () => {
    setCounter(counter + 1);

    routsData.pop();
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={commonStyles.container}>
      <PercentageSpacer height={Platform.OS=="android"?"5%":0}/>

        <ProfileHeader
          label={"Home"}
          leftIcon={icons.cross}
          onAdd={OnAddDestination}
          navigation={navigation}
          addIcon
        />
        <Spacer height={20} />

        {routsData.map((item) => {
          return (
            <>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CustomTextInput
                  onPress={() => setCheck(item.id)}
                  leftIcon={item.id == check ? icons.yourdes : null}
                  placeholder={item.placeholder}
                  borderWidth={item.id == check ? 2 : null}
                  borderColor={item.id == check ? colors.primary : null}
                  paddingLeft={15}
                  mainWidth={item.cross ? "92%" : "100%"}
                  editable={item.id == check ? true : false}
                  tintColor={null}
                  inputLeftMargin={15}
                  height={verticalScale(40)}
                  borderRadius={10}
                  backgroundColor={
                    item.id == check ? colors.white : colors.lightGray
                  }
                  placeholderTextColor={colors.lightBlack1}
                  rightIcon={item.id == check ? icons.map : null}
                  onRight={() => navigation.navigate("Home")}
                />
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={OnRemoveDestination}
                >
                  <Image
                    style={{ width: 20, height: 20, marginLeft: 10 }}
                    source={item.cross}
                  />
                </TouchableOpacity>
              </View>
              <Spacer height={2} />
            </>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default YourRoutes;

const styles = StyleSheet.create({});
