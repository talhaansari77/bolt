import { View, Text } from 'react-native'
import React from 'react'
import CustomSupportHeader from '../../../../components/SupportComponent/CustomSupportHeader'
import SupportHeader from '../Molecules/SupportHeader'
import { Spacer } from '../../../../components/Spacer'
import CustomSupportBody from '../../../../components/SupportComponent/CustomSupportBody'
import { useNavigation } from "@react-navigation/native";

const AboutSupport = () => {
    const navigation = useNavigation();
    const SupportList = [
        {
          id: 1,
          name: "Where can i find bolt offices?",
        },
        {
          id: 2,
          name: "Bolt Public API",
        },
        {
          id: 3,
          name: "Account and data",
        },
        {
          id: 4,
          name: "Where does Bolt operate?",
        },
      ];
  return (
    <View>
        <SupportHeader navigation={navigation} />
        <Spacer height={20} />
      <CustomSupportHeader name={"About Bolt"} navigation={navigation} />
        <Spacer height={20} />
        <CustomSupportBody SupportList={SupportList}  />
    </View>
  )
}

export default AboutSupport