import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../utils/Colors';
import commonStyles from '../utils/CommonStyles';
import icons from '../../assets/Icons';


const ProfileImg = ({height,width,iconSize,edit,alignSelf}) => {
  return (
           <View
    style={{
      height: height || 70,
      width:  width || 70,
      borderRadius: 40,
      // marginBottom: 10,
      backgroundColor:colors.lightGray,
      alignItems:"center",
      justifyContent:"center",
      alignSelf:alignSelf
      // marginLeft: -10,
    }}
  >
  <FontAwesome5 name="user-alt" size={moderateScale( iconSize|| 20)} color="gray" />

  {
      edit?(
        <View
        style={{
         height: 25,
         width:   25,
         borderRadius: 100,
         // marginBottom: 10,
         backgroundColor:colors.primary,
         alignItems:"center",
         justifyContent:"center",
         position:"absolute",
         right:-5,
         top:0,
        //  top:10
       }}
        >
            
              <TouchableOpacity 
                 activeOpacity={0.6}
                 // onPress={onEdit}
                 style={{width:15,height:15}}>
                   <Image
                     resizeMode="contain"
                     style={{
                       ...commonStyles.img,tintColor:colors.white
                     }}
                     source={icons.edit}
                   />
                 </TouchableOpacity>
     
        </View>
      ):<></>
  }
  </View>
 
  
          
   
   
  )
}

export default ProfileImg

const styles = StyleSheet.create({})