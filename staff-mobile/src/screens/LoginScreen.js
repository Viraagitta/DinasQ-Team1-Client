import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import { useEffect } from "react";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { loginStaff } from "../store/action";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "testing3@gmail.com",
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
    dispatch(loginStaff(form))
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.access_token) {
          const access_token = data.access_token;
          AsyncStorage.setItem("access_token", access_token);
          navigation.navigate("Main");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const token = AsyncStorage.getItem("access_token")
  useEffect(() => {
    if (token) {
      navigation.navigate("Main")
    }
  }, [token])
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require("../assets/D.png")} />
      <Text style={styles.title}>LOGIN NOW</Text>
      <TextInput
        style={styles.input}
        type="email"
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => handleChange(text, "email")}
        value={form.email}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        name="password"
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => handleChange(text, "password")}
        value={form.password}
      />
      <Pressable
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
    backgroundColor: "#7ed957",
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
    width: 140,
    height: 140,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 89,
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
