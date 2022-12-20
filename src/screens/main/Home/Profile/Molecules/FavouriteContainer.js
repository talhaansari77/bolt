import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import CustomText from '../../../../../components/CustomText'
import { colors } from '../../../../../utils/Colors'
import { Fontisto } from "@expo/vector-icons";
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { Spacer } from '../../../../../components/Spacer';
import commonStyles from '../../../../../utils/CommonStyles';
import icons from '../../../../../../assets/Icons';
import LineSeparator from '../../../../../components/LineSeparator';


const FavouriteContainer = () => {
    const favData=[
        {id:1,img:icons.home,txt:"Enter home location"},
        {id:2,img:icons.work,txt:"Enter work location"}

    ]
  return (
    <View>
           <CustomText
          label={"Favourite locations"}
          fontFamily={"bold"}
          color={colors.black}
          fontSize={14}
          textAlign="center"
          marginBottom={3}
        />
        <Spacer height={20}/>
        {
            favData.map(item=>{
                return(
                    <View style={{ flexDirection: "row", alignItems: "center",marginBottom:verticalScale(30) }}>
   
<View style={commonStyles.imgContainer}>
          <Image
            resizeMode="contain"
            style={{
              ...commonStyles.img,
              tintColor: colors.lightBlack1,
              width: 20,
            }}
            source={item.img}
          />
        </View>
         
          <CustomText
            label={item.txt}
            fontFamily={"semiBold"}
            color={colors.lightBlack1}
            fontSize={12}
            textAlign="center"
            marginLeft={15}
          />
        </View>
                    

                )

            })


    }
          <LineSeparator height={6}/>




    </View>
  )
}

export default FavouriteContainer

const styles = StyleSheet.create({})