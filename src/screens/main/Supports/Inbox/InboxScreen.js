import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import SupportHeader from '../Molecules/SupportHeader'
import { MaterialIcons } from "@expo/vector-icons";
import { moderateScale } from 'react-native-size-matters';
import { Spacer } from '../../../../components/Spacer';
import CustomText from '../../../../components/CustomText';
import { Entypo } from '@expo/vector-icons';
import { colors } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons'

// chatbubbles-outline


const InboxScreen = ({navigation}) => {
  return (
    <View>
      <SupportHeader />
      <Spacer  height={20}/>
      <View style={{width:"auto", paddingHorizontal:20}}>
      <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="arrow-back"
          size={moderateScale(25)}
          color="black"
        />
      </TouchableOpacity>
      <Spacer  height={20}/>
      <CustomText label="Inbox" fontFamily={"bold"} fontSize={19} />
      <Spacer height={80} />
      <View style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
      {/* <Entypo name="chat" size={100} color="black"  /> */}
      <Ionicons name="chatbubbles-outline" size={100} />
      </View>
      <CustomText label="n" />
      </View>
    </View>
  )
}

export default InboxScreen