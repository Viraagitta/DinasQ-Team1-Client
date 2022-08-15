import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

let apiKey = "AIzaSyDfBv6UQy1uY-uenve-vOGadjMny3CCeLw";

import * as Location from "expo-location";

export default function CityLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [getLocation, setGetLocation] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      Location.setGoogleApiKey(apiKey);

      let { coords } = await Location.getCurrentPositionAsync();

      setLocation(coords);

      console.log(coords);

      if (coords) {
        let { longitude, latitude } = coords;

        let regionName = await Location.reverseGeocodeAsync({
          longitude,
          latitude,
        });
        setAddress(regionName[0]);
        console.log(regionName, "nothing");
      }
    })();
  }, [getLocation]);

  return (
    <View style={styles.container}>
      <Text style={styles.big}>
        {!location
          ? "Waiting"
          : `Lat: ${location.latitude} \nLong: ${
              location.longitude
            } \n${JSON.stringify(address?.["subregion"])}`}
      </Text>
      <TouchableOpacity onPress={() => setGetLocation(!getLocation)}>
        <View
          style={{
            backgroundColor: "blue",
            alignItems: "center",
            borderRadius: 20,
            marginTop: 20,
            padding: 10,
          }}
        >
          <Text style={styles.btnText}>Click Here To Absence</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  big: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
  },
});
