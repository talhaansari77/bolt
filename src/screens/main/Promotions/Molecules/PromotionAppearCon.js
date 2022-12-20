import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { colors } from '../../../../utils/Colors'
import commonStyles from '../../../../utils/CommonStyles'
import icons from '../../../../../assets/Icons'
import CustomText from '../../../../components/CustomText'
import { Spacer } from '../../../../components/Spacer'

const PromotionAppearCon = () => {
  return (
      <View style={{justifyContent:"center",alignItems:"center"}}>
             <View style={styles.appearContainer}>

             <View style={commonStyles.imgContainer}>
          <Image
            resizeMode="contain"
            style={{
              ...commonStyles.img,
              tintColor: colors.gray,
              width: 20,
            }}
            source={icons.promo}
          />
        </View>
      
    </View>
    <Spacer height={10}/>
    <View style={{width:"45%"}}>
    <CustomText
          label={"Your promotions will appear here"}
          fontFamily={"semiBold"}
          color={colors.gray}
          fontSize={13}
          textAlign="center"
        />

    </View>

   

      </View>
 
  )
}

export default PromotionAppearCon

const styles = StyleSheet.create({
    appearContainer:{
        width:50,height:50,
        borderRadius:99,
        backgroundColor:colors.lightGray,
        alignItems:"center",
        justifyContent:"center"

    }

})