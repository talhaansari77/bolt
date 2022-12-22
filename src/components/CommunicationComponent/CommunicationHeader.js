import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { Spacer } from '../Spacer';
import CustomText from '../CustomText';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';


const CommunicationHeader = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{ width: "auto", paddingHorizontal: 20 }}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back"
              size={moderateScale(25)}
              color="black"
            />
          </TouchableOpacity>
          <Spacer height={20} />
          <CustomText label={props.name} fontFamily={"bold"} fontSize={19} />
          <Spacer height={15} />
          <CustomText label={props.subName} fontSize={13} color={colors.gray} />
        </View>
      );
}

export default CommunicationHeader