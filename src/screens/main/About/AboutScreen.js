import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopHeader from '../../../components/TopHeader'
import commonStyles from '../../../utils/CommonStyles'
import { colors } from '../../../utils/Colors'
import CustomText from '../../../components/CustomText'
import { Spacer } from '../../../components/Spacer'
import AboutContainer from './Molecules/AboutContainer'
import icons from '../../../../assets/Icons'
import PercentageSpacer from '../../../components/PercentageSpacer'



const AboutScreen = ({navigation}) => {

    const AboutData=[
        {id:1,img:icons.star,txt:"Rate the app",onPress:()=>{console.log("pless")}},
        {id:2,img:icons.like,txt:"Like us on Facebook"},
        {id:3,img:icons.work,txt:"Solution for work rides"},
        {id:4,img:icons.love,txt:"Careers at Bolt"},
        {id:4,img:icons.legal,txt:"Legal"},
        {id:5,img:icons.file,txt:"Acknowledgments"},


    ]
  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>
        <View style={commonStyles.container}>
        <PercentageSpacer height={Platform.OS=="android"?"5%":0}/>

        <TopHeader label="About" navigation={navigation}/>
        <Spacer height={10}/>
        <CustomText
        label={"Version CA.55.1"}
        fontFamily={"semiBold"}
        color={colors.halfGray}
        fontSize={14}
      />
              <Spacer height={20}/>

              {
                  AboutData.map(item=>{

                    return(
                        <AboutContainer item={item}/>
                        // <AboutContainer item={item}/>


                    )

                  })
              }


        


        </View>
    </SafeAreaView>
  )
}

export default AboutScreen

const styles = StyleSheet.create({})