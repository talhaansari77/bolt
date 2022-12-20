import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import commonStyles from '../../../../utils/CommonStyles'
import { Spacer } from '../../../../components/Spacer'
import ProfileHeader from '../../../../components/ProfileHeader'
import TopProfileContainer from './Molecules/TopProfileContainer'
import FavouriteContainer from './Molecules/FavouriteContainer'
import ProfileBottom from './Molecules/ProfileBottom'

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={commonStyles.container1}>
    <View style={commonStyles.container}>
      <ProfileHeader 
      onEdit={()=>navigation.navigate("EditProfile")}
      label="Profile" navigation={navigation} edit />
      <Spacer height={20} />
      {/* <TopProfileContainer/> */}
      <TopProfileContainer/>

      <Spacer height={20} />
      <FavouriteContainer/>
      <Spacer height={20} />

      <ProfileBottom/>

    </View>
  </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})