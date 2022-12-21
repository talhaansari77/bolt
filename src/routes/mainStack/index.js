import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../../screens/auth/login/LoginScreen'
import Home from '../../screens/main/Home/Home'
import PaymentsScreen from '../../screens/main/Payment/PaymentsScreen'
import PromotionsScreen from '../../screens/main/Promotions/PromotionsScreen'
import MyRidesScreen from '../../screens/main/MyRides/MyRidesScreen'
import SupportsScreen from '../../screens/main/Supports/SupportsScreen'
import AboutScreen from '../../screens/main/About/AboutScreen'
import MainDrawer from '../MainDrawer/MainDrawer'
import ProfileScreen from '../../screens/main/Home/Profile/ProfileScreen'
import EditProfile from '../../screens/main/Home/Profile/EditProfile/EditProfile'
import PromoCode from '../../screens/main/Promotions/PromoCode/PromoCode'
import EmailReceipts from '../../screens/main/Home/Profile/EmailReceipts/EmailReceipts'


const Stack=createStackNavigator()

const MainStack = () => {
  return (
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >
          {/* <Stack.Screen name="Home" component={Home}/> */}
        <Stack.Screen name="EmailReceipts" component={EmailReceipts}/> 
        <Stack.Screen name="MainDrawer" component={MainDrawer}/> 
        <Stack.Screen name="Profile" component={ProfileScreen}/> 
        <Stack.Screen name="EditProfile" component={EditProfile}/> 
        <Stack.Screen name="PromoCode" component={PromoCode}/> 




           {/* <Stack.Screen name="Payment" component={PaymentsScreen}/>
          <Stack.Screen name="Promotion" component={PromotionsScreen}/>
          <Stack.Screen name="MyRide" component={MyRidesScreen}/>
          <Stack.Screen name="Support" component={SupportsScreen}/>
          <Stack.Screen name="About" component={AboutScreen}/> */}



      </Stack.Navigator>
  
  )
}

export default MainStack