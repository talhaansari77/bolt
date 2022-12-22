import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import SupportHeader from '../Molecules/SupportHeader';
import { Spacer } from '../../../../components/Spacer';
import CustomSupportHeader from '../../../../components/SupportComponent/CustomSupportHeader';
import CustomSupportBody from '../../../../components/SupportComponent/CustomSupportBody';

const PaymentAndPricing = () => {
    const navigation = useNavigation();
    const SupportList = [
      {
        id: 1,
        name: "Upfront pricing in the UK",
      },
      {
        id: 2,
        name: "Price higher then expected",
      },
      {
        id: 3,
        name: "Issues with the promotion",
      },
      {
        id: 4,
        name: "International transcation fees in Azerbaijan",
      },
      {
        id: 5,
        name: "Adding or removing payment method in Germany",
      },
      {
        id: 6,
        name: "How to use Expense provider with the work profile",
      },
      {
        id: 7,
        name: "Adding or removing payment method in the netherlands",
      },
      {
        id: 8,
        name: "How to use Business payment method",
      },
      {
        id: 8,
        name: "Paid wait time fees",
      },
      {
          id: 9,
          name: "Issue with additional fees in Ireland",
        },
    ];
    return (
      <View>
        <SupportHeader navigation={navigation} />
        <Spacer height={20} />
        <CustomSupportHeader name={"Payment and Pricing"} navigation={navigation} />
        <Spacer height={20} />
        <CustomSupportBody SupportList={SupportList} />
      </View>
    );
}

export default PaymentAndPricing