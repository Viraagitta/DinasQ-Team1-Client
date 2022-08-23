import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SelectedImage({ onChangeImage = () => {} }) {
  const [selectedImage, setSelectedImage] = React.useState(null);

  useEffect(() => {
    onChangeImage(selectedImage);
  }, [selectedImage]);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      base64: true,

      quality: 0.2,

      // quality: 0,
    });

    if (pickerResult.cancelled === true) {
      return;
    }
    // console.log(pickerResult.base64);
    setSelectedImage(`data:image/jpg;base64,${pickerResult.base64}`);
  };

  if (selectedImage !== null) {
    // console.log(selectedImage);
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: selectedImage,
          }}
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
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="image-outline" size={22} style={styles.image} />
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
    marginBottom: 15,
    marginTop: 22,
    marginLeft: 23,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  logo: {
    width: 325,
    height: 159,
  },
  instructions: {
    color: "#256D85",
    fontSize: 16,
    marginHorizontal: 35,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "mintcream",
    borderColor: "black",
    marginTop: 15,
    borderColor: "black",
    // padding: 10,
    width: 290,
    height: 60,
    borderRadius: 12,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 14,
    color: "silver",
  },
  thumbnail: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  image: {
    backgroundColor: "#3CCF4E",
    color: "#fff",
    padding: 5,
    height: 60,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    width: 40,
  },
});
