import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SelectedImage() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    console.log(selectedImage);
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <Text>{selectedImage.localUri}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.instructions}></Text> */}
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <Ionicons name="image-outline" size={22} />
          <View>
            <Text style={styles.instructions}>Upload Receipt / Bill</Text>
            <Text style={styles.buttonText}>Choose Photo From Galery</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: "#191970",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "whitesmoke",
    borderColor: "black",
    padding: 10,
    borderRadius: 20,
    elevation: 2,
  },
  buttonText: {
    fontSize: 14,
    color: "silver",
  },
  thumbnail: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
