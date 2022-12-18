import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../../screens/auth/login/LoginScreen'
import PhoneNumber from '../../screens/auth/login/PhoneNumber/PhoneNumber'
import PhoneOtp from '../../screens/auth/login/PhoneOtp/PhoneOtp'


const Stack=createStackNavigator()

const AuthStack = () => {
  return (
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="PhoneNumber" component={PhoneNumber}/>
          <Stack.Screen name="PhoneOtp" component={PhoneOtp}/>


          {/* <Stack.Screen name="PhoneNumber" component={PhoneNumber}/>
          <Stack.Screen name="Register" component={Register}/> */}


      </Stack.Navigator>
  
  )
}

export default AuthStack