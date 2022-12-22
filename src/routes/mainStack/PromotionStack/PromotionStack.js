import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PromotionsScreen from "../../../screens/main/Promotions/PromotionsScreen";
import PromoCode from "../../../screens/main/Promotions/PromoCode/PromoCode";

const Stack = createStackNavigator();

const PromotionStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PromotionsScreen" component={PromotionsScreen} />
      <Stack.Screen name="PromoCode" component={PromoCode}/> 



    </Stack.Navigator>
  );
};
export default PromotionStack;
