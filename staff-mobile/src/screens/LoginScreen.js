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
  ToastAndroid,
} from "react-native";
import { useEffect } from "react";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { loginStaff } from "../store/action";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [retrieve, setRetrieve] = useState(false);

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
    e.preventDefault();
    dispatch(loginStaff(form))
      .then(async (response) => {
        return await response.json();
      })
      .then((data) => {
        if (data.access_token) {
          const access_token = data.access_token;
          AsyncStorage.setItem("access_token", access_token);
          navigation.replace("Main");
        } else {
          ToastAndroid.show(data.message, ToastAndroid.SHORT);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const retrieveData = async () => {
      try {
        const token = await AsyncStorage.getItem("access_token");
        if (token) {
          navigation.replace("Main");
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (!retrieve) {
      retrieveData();
      setRetrieve(true);
    }
  }, [retrieve]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require("../assets/login.jpg")} />
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.underTitle}>
        Fill yout details or continue with social media
      </Text>
      <Text style={styles.socialMedia}>Social media</Text>
      <Text style={styles.nameInput}>Email address</Text>
      <TextInput
        style={styles.input}
        type="email"
        placeholder="Email address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => handleChange(text, "email")}
        value={form.email}
      />
      <Text style={styles.nameInput}>Password</Text>
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
        onPressOut={(e) => {
          submitForm(e);
        }}
      >
        <Text style={styles.button}>LOGIN</Text>
      </Pressable>
      <Text style={styles.problem}>Any problem with login ? contact us</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "mediumseagreen",
    backgroundColor: "#F9F9F9",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    // marginBottom: 25,
    marginTop: 45,
    marginLeft: 20,
    color: "#100F0F",
  },
  underTitle: {
    marginTop: 16,
    marginLeft: 20,
    color: "#2C3639",
  },
  socialMedia: {
    marginLeft: 20,
    color: "#2C3639",
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
    fontSize: 13,
    // borderWidth: 1,
    padding: 12,
    width: "90%",
    // borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,

    elevation: 1.5,
  },
  nameInput: {
    marginLeft: 20,
    marginTop: 15,
    color: "#2C3639",
  },
  image: {
    width: 180,
    height: 170,
    marginTop: 35,
    marginLeft: 130,
  },
  button: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    width: "40%",
    marginTop: 8,
    borderRadius: 5,
    backgroundColor: "#3CCF4E",
    padding: 12,
    marginLeft: 20,
    textAlign: "center",
  },
  problem: {
    marginLeft: 20,
    marginTop: 12,
    color: "#2C3639",
  },
});

export default LoginScreen;
