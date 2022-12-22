import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Spacer } from '../Spacer'
import CustomText from '../CustomText'
import { colors } from '../../utils/Colors'
import { AntDesign } from "@expo/vector-icons";

const CustomSupportBody = (props) => {
  return (
    <View style={{width:"auto", paddingHorizontal:15}} >
      {props.SupportList.map((item, index) => (
          <View>
            <TouchableOpacity activeOpacity={0.6}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Spacer width={13} />
                  <View>
                    <CustomText label={item.name} fontSize={13.5} />
                  </View>
                </View>

                <View>
                  <AntDesign name="right" size={20} color={colors.gray1} />
                </View>
              </View>
              <Spacer height={12} />
              <View
                style={{
                  height: 0.7,
                  width: "100%",
                  backgroundColor: colors.gray,
                }}
              />
              <Spacer height={13} />
            </TouchableOpacity>
          </View>
        ))}
    </View>
  )
}

export default CustomSupportBody