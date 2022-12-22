import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../../../../../utils/Colors'
import commonStyles from '../../../../../utils/CommonStyles'
import TopHeader from '../../../../../components/TopHeader'
import ProfileHeader from '../../../../../components/ProfileHeader'
import icons from '../../../../../../assets/Icons'
import CustomTextInput from '../../../../../components/CustomTextInput'
import { verticalScale } from 'react-native-size-matters'
import { Spacer } from '../../../../../components/Spacer'

const SearchLocation = ({navigation,route}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
    <View style={commonStyles.container}>
        <ProfileHeader label={route?.params?.location?"Work" :"Home"}leftIcon={icons.cross}/>
        <Spacer height={20}/>

        <CustomTextInput leftIcon={icons.search}
        placeholder="Search location"
        borderWidth={2}
        borderColor={colors.primary}
        paddingLeft={15}
        inputLeftMargin={15}
        height={verticalScale(40)}
        borderRadius={10}
        placeholderTextColor={colors.lightBlack1}
        rightIcon={icons.map}
        onRight={()=>navigation.navigate("Home")}
        
        />
     



    </View>
  </SafeAreaView>
  )
}

export default SearchLocation

const styles = StyleSheet.create({})