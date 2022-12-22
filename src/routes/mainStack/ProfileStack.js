import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EmailReceipts from "../../screens/main/Home/Profile/EmailReceipts/EmailReceipts";
import ProfileScreen from "../../screens/main/Home/Profile/ProfileScreen";
import EditProfile from "../../screens/main/Home/Profile/EditProfile/EditProfile";
import SearchLocation from "../../screens/main/Home/Profile/SearchLocation/SearchLocation";
import CommunicationPreference from "../../screens/main/Home/Profile/CommunicationPreference/CommunicationPreference";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="EmailReceipts" component={EmailReceipts} />
      <Stack.Screen name="SearchLocation" component={SearchLocation}/> 
      <Stack.Screen name="CommunicationPreference" component={CommunicationPreference}/>


    </Stack.Navigator>
  );
};
export default ProfileStack;
