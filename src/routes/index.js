import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AuthStack from "./authStack";
import MainStack from "./mainStack";
import MainDrawer from "./MainDrawer/MainDrawer";
import YourRoutes from "../screens/main/Home/YourRoutes/YourRoutes";
import ProfileStack from "./mainStack/ProfileStack";
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />

      <Stack.Screen name="MainDrawer" component={MainDrawer} />
        <Stack.Screen name="YourRoutes" component={YourRoutes}/>
      <Stack.Screen name="ProfileStack" component={ProfileStack}/>






      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
