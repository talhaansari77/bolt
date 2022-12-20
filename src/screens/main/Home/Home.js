import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import LocationModal from "./Molecules/LocationModal";
import DrawerContainer from "./Molecules/DrawerContainer";

const Home = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

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
