import { View, Text } from 'react-native'
import React from 'react'
import CustomInputWithLabel from '../../../../../../components/CustomInputWithLabel'
import { colors } from '../../../../../../utils/Colors'
import { Spacer } from '../../../../../../components/Spacer'

const EditInputContainer = () => {

    const inputData=[
        {id:1,value:"awais",placeholder:"first name",label:"First name"},
        {id:2,value:"abbas",placeholder:"last name",label:"Last name"},
        {id:2,value:"+923418616783",placeholder:"phone number",label:"Phone number"},

    ]
  return (
    <View>
        {
            inputData.map(item=>{
                return(
                    <>
                      <CustomInputWithLabel borderRadius={5} label={item.label}
                    paddingLeft={10}
                    color={colors.gray}
                    value={item.value}
                    placeholder={item.placeholder}
                    placeholderTextColor={colors.black}
                    />
                    <Spacer height={15}/>
                    </>
                  

                )

            })
        }
       
    </View>
  )
}

export default EditInputContainer