import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
import { userAbsence } from "../store/action";
import { useNavigation } from "@react-navigation/native";
// import { userAbsence } from "../store/action";

let apiKey = "apikeyfortestonly";
export default function CityLocation() {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [getLocation, setGetLocation] = useState(false);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      Location.setGoogleApiKey(apiKey);

      // let { coords } = await Location.getCurrentPositionAsync();
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      setLocation(location.coords);

      // console.log(coords);

      let coords = location.coords;
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
  // console.log(location.longitude, "<<loc");
  const submitAbsence = (e) => {
    navigation.navigate("Main");
    e.preventDefault();
    dispatch(
      userAbsence({
        longitude: location.longitude,
        latitude: location.latitude,
        cityName: address.subregion,
      })
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setGetLocation(!getLocation)}>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Form absence has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Thank You! We Got Your Location!
                </Text>
                {/* <Text style={styles.modalText}>CITY NAME</Text> */}
                <TextInput
                  style={styles.input}
                  // secureTextEntry={true}
                  type="text"
                  placeholder="City Name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  name="cityName"
                  value="Kabupaten Bekasi"
                />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={(e) => {
                    setModalVisible(!modalVisible);
                    submitAbsence(e);
                  }}
                >
                  <Text style={styles.textStyle}>OK</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textStyle}>Absence</Text>
            </Pressable>
          </View>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#008000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 12,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    width: 300,
  },
  buttonOpen: {
    backgroundColor: "#FD5D5D",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
