import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { colors } from '../utils/Colors';
// import {Spacer} from '../../../../components/Spacer';
import { Spacer } from './Spacer';
import {moderateScale} from 'react-native-size-matters';

const SocialButton = ({label, icon}) => (
  <TouchableOpacity
    activeOpacity={0.6}
    style={{
      backgroundColor: colors.white,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth:1,
      borderColor:colors.gray1,
      justifyContent: 'center',
      borderRadius: moderateScale(50),  
      alignSelf: 'center',
      padding: moderateScale(10),
    }}>
    <View style={{flex: 3, flexDirection: 'row'}}>
      <Spacer width={12} />
      <Image
        source={icon}
        style={{width: 27, height: 27}}
        resizeMode={'contain'}
      />
    </View>
    <View style={{flex: 7}}>
      <CustomText
        fontFamily={"regular"}
        color={colors.black}
        fontSize={14}
        label={label}
      />
    </View>
  </TouchableOpacity>
);

export default SocialButton;
