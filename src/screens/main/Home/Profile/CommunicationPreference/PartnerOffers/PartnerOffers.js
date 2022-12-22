import { View, Text } from 'react-native'
import React from 'react'
import { Spacer } from '../../../../../../components/Spacer';
import CommunicationHeader from '../../../../../../components/CommunicationComponent/CommunicationHeader';
import CommunicationBody from '../../../../../../components/CommunicationComponent/CommunicationBody';

const PartnerOffers = () => {
    const SupportList = [
        {
          id: 1,
          name: "Email",
        },
        {
          id: 2,
          name: "Push",
        },
        {
          id: 3,
          name: "SMS",
        },
      ];
    
      return (
        <View>
          <Spacer height={45} />
          <CommunicationHeader
            name="Partner Offers"
            subName={"Don't miss out offers from Bolt's truested partners"}
          />
          <Spacer height={20} />
          {SupportList.map((item, index) => (
            <View>
              <CommunicationBody name={item.name} />
            </View>
          ))}
        </View>
      );
}

export default PartnerOffers