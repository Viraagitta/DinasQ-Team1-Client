import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Image,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { loginStaff } from "../store/action";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "testing@gmail.com",
    password: "12345",
  });
  const handleChange = (text, name) => {
    const getForm = {
      email: form.email,
      password: form.password,
    };
    // console.log(e.value);
    getForm[name] = text;
    setForm(getForm);
  };
  const submitForm = (e) => {
    // window.location.reload;
    e.preventDefault();
    dispatch(loginStaff(form));
    navigation.navigate("Main");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/Logo-DinasQ1.jpeg")}
      />
      <Text style={styles.title}>LOGIN NOW</Text>
      <TextInput
        style={styles.input}
        type="email"
        placeholder="Email"
        onChangeText={(text) => handleChange(text, "email")}
        value={form.email}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        name="password"
        placeholder="Password"
        onChangeText={(text) => handleChange(text, "password")}
        value={form.password}
      />
      <Pressable
        // style={styles.button}
        onPress={(e) => {
          submitForm(e);
        }}
      >
        <Text style={styles.button}>LOGIN</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundImage:
    //   "https://media.istockphoto.com/vectors/online-booking-banner-online-flight-booking-travel-agent-stands-at-vector-id682602594?k=20&m=682602594&s=170667a&w=0&h=1uzxEBPuY81fs_4ZNNyZXZXwlq1zXuM2wTS5wHLOiXE=",
    backgroundColor: "#465881",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    marginBottom: 30,
    marginTop: 16,
    color: "white",
  },
  error: {
    fontSize: 16,
    color: "red",
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 36,
    marginRight: 36,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    padding: 12,
    width: "80%",
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 16,
    marginTop: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 100,
  },
  button: {
    fontSize: 20,
    color: "white",
    width: 120,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: "#2e8b57",
    padding: 8,
    textAlign: "center",
  },
});

export default LoginScreen;
