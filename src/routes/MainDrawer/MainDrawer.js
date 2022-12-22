import { View, Text, Image } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainStack from "../mainStack";
import CustomDrawer from "./CustomDrawer";
import { colors } from "../../utils/Colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import PaymentsScreen from "../../screens/main/Payment/PaymentsScreen";
import PromotionsScreen from "../../screens/main/Promotions/PromotionsScreen";
import AboutScreen from "../../screens/main/About/AboutScreen";
import SupportsScreen from "../../screens/main/Supports/SupportsScreen";
import MyRidesScreen from "../../screens/main/MyRides/MyRidesScreen";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import icons from "../../../assets/Icons";
import Home from "../../screens/main/Home/Home";
import PromotionStack from "../mainStack/PromotionStack/PromotionStack";
import SupportStack from "../mainStack/SupportStack/SupportStack";

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#3f3f3f",
        drawerActiveBackgroundColor: colors.secondary,
        drawerLabelStyle: {
          marginLeft: -15,
          fontSize: 15,
          marginVertical: 5,
        },
      }}
      initialRouteName={"Home"}
    >
      <Drawer.Screen
        options={{
          drawerItemStyle:{display:"none"},
          drawerIcon: ({ color }) => (
            <Image
              source={icons.payment}
              style={{
                width: scale(20),
                height: verticalScale(20),
                tintColor: "#3f3f3f",
              }}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Image
              source={icons.payment}
              style={{
                width: scale(20),
                height: verticalScale(20),
                tintColor: "#3f3f3f",
              }}
            />
          ),
        }}
        name="Payment"
        component={PaymentsScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Image
              resizeMode="contain"
              source={icons.promotion}
              style={{
                width: scale(20),
                height: verticalScale(20),
                tintColor: "#3f3f3f",
              }}
            />
          ),
        }}
        name="Promotions"
        component={PromotionStack}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Image
              resizeMode="contain"
              source={icons.ride}
              style={{
                width: scale(20),
                height: verticalScale(20),
                tintColor: "#3f3f3f",
              }}
            />
          ),
        }}
        name="My Rides"
        component={MyRidesScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Image
              resizeMode="contain"
              source={icons.question}
              style={{
                width: scale(20),
                height: verticalScale(20),
                tintColor: "#3f3f3f",
              }}
            />
          ),
        }}
        name="Supports"
        component={SupportStack}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Image
              resizeMode="contain"
              source={icons.about}
              style={{
                width: scale(20),
                height: verticalScale(20),
                tintColor: "#3f3f3f",
              }}
            />
          ),
        }}
        name="About"
        component={AboutScreen}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
