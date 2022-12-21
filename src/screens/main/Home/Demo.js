import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import LocationModal from "./Molecules/LocationModal";
import DrawerContainer from "./Molecules/DrawerContainer";
import { colors } from "../../../utils/Colors";
import icons from "../../../../assets/Icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(true);
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0,
    longitudeDelta: 0.0031,
  };
  return (
    <View style={styles.container}>
      <MapView
        region={region}
        style={styles.map}
        // initialRegion={{
        //   latitude: 37.78825,
        //   longitude: -122.4324,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
          {/* <View style={{}}> */}
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                width: 55,
                backgroundColor: colors.primary,
                borderRadius: 15,
              }}
            >
              <AntDesign
                name="user"
                size={24}
                color={colors.white}
                style={{
                  alignSelf: "center",
                }}
              />
            </View>
            <AntDesign
              name="caretdown"
              size={20}
              color={colors.primary}
              style={{ alignSelf: "center", marginTop: -7 }}
            />
          {/* </View> */}
        </Marker>
      </MapView>

      <LocationModal isVisible={isVisible} setIsVisible={setIsVisible} />
      <DrawerContainer navigation={navigation} />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
