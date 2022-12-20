import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import CustomInputWithLabel from '../../../../../components/CustomInputWithLabel'
import { colors } from '../../../../../utils/Colors'
import commonStyles from '../../../../../utils/CommonStyles'
import TopHeader from '../../../../../components/TopHeader'
import { Spacer } from '../../../../../components/Spacer'
import ProfileHeader from '../../../../../components/ProfileHeader'
import ProfileImg from '../../../../../components/ProfileImg'
import EditInputContainer from './Molecules/EditInputContainer'
import EditBottomContainer from './Molecules/EditBottomContainer'

const EditProfile = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={commonStyles.container}>
        <ProfileHeader label="Edit Profile" navigation={navigation} />
        <Spacer height={40} />
        <ProfileImg edit alignSelf="center"/>

        <Spacer height={20} />
        <EditInputContainer/>
        <Spacer height={5} />


        <EditBottomContainer/>
        
      </View>
    </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({})