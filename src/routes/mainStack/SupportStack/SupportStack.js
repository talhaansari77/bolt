import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InboxScreen from "../../../screens/main/Supports/Inbox/InboxScreen";
import AppsAndFeatures from "../../../screens/main/Supports/AppsAndFeatures/AppsAndFeatures";
import AboutSupport from "../../../screens/main/Supports/AboutSupport/AboutSupport";
import SupportsScreen from "../../../screens/main/Supports/SupportsScreen";
import AccountAndData from "../../../screens/main/Supports/AccountAndData/AccountAndData";
import PaymentAndPricing from "../../../screens/main/Supports/PaymentAndPricing/PaymentAndPricing";
import UsingBolt from "../../../screens/main/Supports/UsingBolt/UsingBolt";

const Stack = createStackNavigator();

const SupportStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SupportsScreen" component={SupportsScreen} />
      <Stack.Screen name="InboxScreen" component={InboxScreen} />
      <Stack.Screen name="AboutSupport" component={AboutSupport} />
      <Stack.Screen name="AppsAndFeatures" component={AppsAndFeatures} />
      <Stack.Screen name="AccountAndData" component={AccountAndData} />

      <Stack.Screen name="PaymentAndPricing" component={PaymentAndPricing} />
      <Stack.Screen name="UsingBolt" component={UsingBolt} />



      
    </Stack.Navigator>
  );
};
export default SupportStack;
