import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import commonStyles, { PH10, PH20 } from '../../../utils/CommonStyles'
import PercentageSpacer from '../../../components/PercentageSpacer'
import LoginMainContainer from './Molecules/LoginMainContainer'
import { colors } from '../../../utils/Colors'
import LoginBottom from './Molecules/LoginBottom'
import { Spacer } from '../../../components/Spacer'

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>
      <View style={commonStyles.container}>
        <PercentageSpacer height={"25%"}/>
        <LoginMainContainer navigation={navigation}/>
        <PercentageSpacer height={"30%"}/>
        <LoginBottom/>









      </View>
    
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})