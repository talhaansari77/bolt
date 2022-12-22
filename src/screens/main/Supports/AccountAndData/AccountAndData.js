import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import SupportHeader from '../Molecules/SupportHeader';
import { Spacer } from '../../../../components/Spacer';
import CustomSupportHeader from '../../../../components/SupportComponent/CustomSupportHeader';
import CustomSupportBody from '../../../../components/SupportComponent/CustomSupportBody';

const AccountAndData = () => {
    const navigation = useNavigation();
    const SupportList = [
      {
        id: 1,
        name: "Delete my Bolt data",
      },
      {
        id: 2,
        name: "i can't sign into my account in Saudi Arabia",
      },
      {
        id: 3,
        name: "Sign up as Bolt driver in Netherland",
      },
      {
        id: 4,
        name: "I can't sign in to my account",
      },
      {
        id: 5,
        name: "Sign up to deliver food with bolt",
      },
      {
        id: 6,
        name: "Sign up to drive with Bolt",
      },
      {
        id: 7,
        name: "Connect with FaceBook",
      },
      {
        id: 8,
        name: "Why is my Account Blocked",
      },
      {
        id: 8,
        name: "My Account is Suspended due to rider ",
      },
      {
          id: 9,
          name: "Edit my Account Information",
        },
    ];
    return (
      <View>
        <SupportHeader navigation={navigation} />
        <Spacer height={20} />
        <CustomSupportHeader name={"Account and data"} navigation={navigation} />
        <Spacer height={20} />
        <CustomSupportBody SupportList={SupportList} />
      </View>
    );
}

export default AccountAndData