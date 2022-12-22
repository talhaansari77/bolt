import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React,{useState} from "react";
import CustomText from "../../../../../components/CustomText";
import { colors } from "../../../../../utils/Colors";
import { Spacer } from "../../../../../components/Spacer";
import LineSeparator from "../../../../../components/LineSeparator";
import commonStyles from "../../../../../utils/CommonStyles";
import icons from "../../../../../../assets/Icons";
import { verticalScale } from "react-native-size-matters";
import CountryPicker from "rn-country-picker";


const ProfileBottom = ({ navigation }) => {
  const [countryCode, setCountryCode] = useState("91");



  const selectedValue = (value) => {
		setCountryCode(value);
	};
  return (
    <>
      <TouchableOpacity
      activeOpacity={0.6}
      >
        <CustomText
          label={"Language"}
          fontFamily={"semiBold"}
          color={colors.lightBlack1}
          fontSize={16}
          textAlign="center"
          marginBottom={5}
        />
        <CustomText
          label={"English - US"}
          fontFamily={"semiBold"}
          color={colors.gray1}
          fontSize={12}
          textAlign="center"
          marginBottom={3}
        />
      </TouchableOpacity>

      <Spacer height={30} />
      <CustomText
        onPress={() => navigation.navigate("CommunicationPreference")}
        label={"Communication preference"}
        fontFamily={"semiBold"}
        color={colors.lightBlack1}
        fontSize={13}
        textAlign="center"
      />
      <Spacer height={20} />

      <LineSeparator height={6} />
      <Spacer height={20} />

      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: verticalScale(10),
        }}
      >
        <View style={commonStyles.imgContainer}>
          <Image
            resizeMode="contain"
            style={{
              ...commonStyles.img,
              tintColor: colors.lightBlack1,
              width: 30,
            }}
            source={icons.logout}
          />
        </View>
        <CountryPicker
				disable={false}
				animationType={"slide"}
				language="en"
				containerStyle={styles.pickerStyle}
				pickerTitleStyle={styles.pickerTitleStyle}
				dropDownImage={icons.cross}
				selectedCountryTextStyle={styles.selectedCountryTextStyle}
				countryNameTextStyle={styles.countryNameTextStyle}
				pickerTitle={"Country Picker"}
				searchBarPlaceHolder={"Search......"}
				hideCountryFlag={false}
				hideCountryCode={true}
				searchBarStyle={styles.searchBarStyle}
				backButtonImage={icons.cross}
				searchButtonImage={icons.search}
				countryCode={"1"}
				selectedValue={selectedValue}
			/>

        <CustomText
          label={"Log out"}
          fontFamily={"semiBold"}
          color={colors.lightBlack1}
          fontSize={14}
          textAlign="center"
          marginLeft={15}
        />
      </TouchableOpacity>
    </>
  );
};

export default ProfileBottom;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	titleText: {
		color: "#000",
		fontSize: 25,
		marginBottom: 25,
		fontWeight: "bold",
	},
	pickerTitleStyle: {
		justifyContent: "center",
		flexDirection: "row",
		alignSelf: "center",
		fontWeight: "bold",
	},
	pickerStyle: {
		height: 54,
		width: 150,
		marginVertical: 10,
		borderColor: "#303030",
		alignItems: "center",
		marginHorizontal: 10,
		padding: 10,
		backgroundColor: "white",
		borderRadius: 5,
		borderWidth: 2,
		fontSize: 16,
		color: "#000",
	},
	selectedCountryTextStyle: {
		paddingLeft: 5,
		color: "#000",
		textAlign: "right",
	},

	countryNameTextStyle: {
		paddingLeft: 10,
		color: "#000",
		textAlign: "right",
	},

	searchBarStyle: {
		flex: 1,
	},
});