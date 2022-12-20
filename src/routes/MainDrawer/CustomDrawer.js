import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import icons from '../../../assets/Icons';
import { colors } from '../../utils/Colors';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { FontAwesome5 } from '@expo/vector-icons';
import { Spacer } from '../../components/Spacer';
import LineSeparator from '../../components/LineSeparator';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = ({...props}) => {

  const navigation=useNavigation()





  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: colors.white}}>
        <View style={{height:verticalScale(120),justifyContent:"center"}}>
        <View style={{flexDirection:"row",alignItems:"center",}}>

        <View style={{padding: 10}}>
            <View
              style={{
                height: 70,
                width: 70,
                borderRadius: 40,
                // marginBottom: 10,
                backgroundColor:colors.lightGray,
                alignItems:"center",
                justifyContent:"center"
                // marginLeft: -10,
              }}
            >
            <FontAwesome5 name="user-alt" size={moderateScale(30)} color="gray" />
            </View>
          
          </View>

          <View style={{paddingLeft: verticalScale(5)}}>
          
            <Text
              style={{
              
                fontSize: 20,
                color: colors.black,
                fontFamily:"bold"
              }}>
              {'awais'}
            </Text>
            <TouchableOpacity
            activeOpacity={0.6}
            onPress={()=>navigation.navigate("Profile")}
            >
            <Text
              style={{
                color: colors.primary,
                justifyContent: 'center',
                fontFamily:"semiBold",
              
                fontSize:verticalScale(14)
              }}>
              {"Edit profile"}
            </Text>

            </TouchableOpacity>
          
          </View>

        </View>
        <Spacer height={10}/>
        <LineSeparator height={5.5} width={"100%"}/>



       
        </View>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* <View style={{marginBottom: 20}}>
        {status ? (
          <Button
            text="Logout"
            size={20}
            color={appColors.secondary}
            onPress={() => {
              CustomConfirmAlert(
                'Important',
                'Are Your Sure You Want To Logout',
                () => {
                  dispatch({
                    type: 'Logout',
                  });
                },
              );
              // console.log(res);
            }}
          />
        ) : (
          <></>
        )}
      </View> */}
    </View>
  );
};

export default CustomDrawer;

