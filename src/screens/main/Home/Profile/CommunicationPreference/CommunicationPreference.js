import { StyleSheet, Text, View,SafeAreaView, Platform } from 'react-native'
import React from 'react'
import commonStyles from '../../../../../utils/CommonStyles'
import { Spacer } from '../../../../../components/Spacer'
import ProfileHeader from '../../../../../components/ProfileHeader'
import TopHeader from '../../../../../components/TopHeader'
import PreferenceContainer from './Molecules/PreferenceContainer'
import PercentageSpacer from '../../../../../components/PercentageSpacer'

const CommunicationPreference = ({navigation}) => {
    const  prefData=[
        "Promotions & Tips",
        "Bolt's Products",
        "Travelling",
        "Partner Offers"
    ]
  return (
    <SafeAreaView style={commonStyles.container1}>
    <View style={commonStyles.container}>
    <PercentageSpacer height={Platform.OS=="android"?"5%":0}/>

        <TopHeader label={"Communication preferences"}
        navigation={navigation}
        />
    
      <Spacer height={20} />
      {/* <TopProfileContainer/> */}
      {
          prefData.map(item=>{
              return(
                <PreferenceContainer item={item} />


              )

          })
      }

      <Spacer height={20} />
      <Spacer height={20} />


    </View>
  </SafeAreaView>
  )
}

export default CommunicationPreference

const styles = StyleSheet.create({})