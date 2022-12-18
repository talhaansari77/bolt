import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../../screens/auth/login/LoginScreen'
import Home from '../../screens/main/Home/Home'


const Stack=createStackNavigator()

const MainStack = () => {
  return (
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >
          <Stack.Screen name="Home" component={Home}/>
          {/* <Stack.Screen name="PhoneNumber" component={PhoneNumber}/>
          <Stack.Screen name="Register" component={Register}/> */}


      </Stack.Navigator>
  
  )
}

export default MainStack