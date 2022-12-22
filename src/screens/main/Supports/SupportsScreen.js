import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SupportHeader from "./Molecules/SupportHeader";
import SupportBody from "./Molecules/SupportBody";
import { Entypo } from "@expo/vector-icons";
import SupportBottom from "./Molecules/SupportBottom";
import { Spacer } from "../../../components/Spacer";
import { useNavigation } from '@react-navigation/native';

const SupportsScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <SupportHeader navigation={navigation} />
      <SafeAreaView>
        <View style={{ width: "auto", paddingHorizontal: 18 }}>
          <SupportBody navigation={navigation}  />
          <Spacer height={25} />
          <SupportBottom navigation={navigation} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SupportsScreen;

const styles = StyleSheet.create({});
