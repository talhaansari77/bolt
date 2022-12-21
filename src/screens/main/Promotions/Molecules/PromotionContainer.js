import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import commonStyles from "../../../../utils/CommonStyles";
import icons from "../../../../../assets/Icons";
import { Spacer } from "../../../../components/Spacer";
import LineSeparator from "../../../../components/LineSeparator";

const PromotionContainer = ({ navigation }) => {
  return (
    <View>
      <View style={styles.mainContainer}>
        <View style={commonStyles.imgContainer}>
          <Image
            resizeMode="contain"
            style={{
              ...commonStyles.img,
              tintColor: colors.lightBlack1,
              width: 20,
            }}
            source={icons.promotion}
          />
        </View>
        <Spacer width={20} />
        <CustomText
          label={"Enter promo code"}
          fontFamily={"semiBold"}
          color={colors.lightBlack1}
          fontSize={13}
          onPress={() => navigation.navigate("PromoCode")}
        />
      </View>
      <Spacer height={15} />
      <LineSeparator height={5} width={"100%"} />
    </View>
  );
};

export default PromotionContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
