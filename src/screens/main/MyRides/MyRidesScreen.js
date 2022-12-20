import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import { Spacer } from '../../../components/Spacer'
import TopHeader from '../../../components/TopHeader'
import commonStyles from '../../../utils/CommonStyles'
import { colors } from '../../../utils/Colors'
import PercentageSpacer from '../../../components/PercentageSpacer'
import RideContainer from './Molecules/RideContainer'

const MyRidesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
    <View style={commonStyles.container}>
      <TopHeader label="My Rides" navigation={navigation} />
      {/* <Spacer height={10} /> */}
      <PercentageSpacer height={"40%"}/>
      <RideContainer/>



    </View>
  </SafeAreaView>
  )
}

export default MyRidesScreen

const styles = StyleSheet.create({})