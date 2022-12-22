import { StyleSheet, Text, View, SafeAreaView,Keyboard,ScrollView, Platform } from "react-native";
import React,{useState,useEffect} from "react";
import { colors } from "react-native-elements";
import commonStyles from "../../../../utils/CommonStyles";
import PhoneNuHeader from "./PhoneNuHeader";
import PhoneNuMain from "./PhoneNuMain";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/CustomButton";
import PercentageSpacer from "../../../../components/PercentageSpacer";

const PhoneNumber = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("")

  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);



  return (
    <ScrollView keyboardDismissMode="interactive" contentContainerStyle={styles.LoginBackground}>

    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      {/* <PercentageSpacer height={Platform.OS=="android"?"5%":0}/> */}
      <View style={commonStyles.container}>
        <PhoneNuHeader navigation={navigation}
        label="Enter your number"
         />
        <Spacer height={20} />

        <PhoneNuMain 
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        />
        <PercentageSpacer height={"60%"}/>
        {
                  !keyboardStatus?(

        <CustomButton 
        onPress={()=>{
          if(!phoneNumber)
          {
            alert("Please enter phone number")
          }
          else{
          navigation.navigate("PhoneOtp")
          }

        }

        }
        // onPress={()=> navigation.navigate("MainStack",{screen:"MainDrawer"})}
        title="Continue"  borderRadius={50}/>

                  ):<></>


        }


      </View>
    </SafeAreaView>
    </ScrollView>

  );
};

export default PhoneNumber;

const styles = StyleSheet.create({
  LoginBackground: {
    backgroundColor: colors.white,
    flex: 1,
  
  },
});
