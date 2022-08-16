import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
// import LoginScreen from "./src/screens/LoginScreen";
import { Provider } from "react-redux";
import store from "./src/store";
import { NavigationContainer } from "@react-navigation/native";
// import { navigationRef } from "./RootNavigation";
import Navigator from "./src/navigation/Navigator";
import HomeScreen from "./src/screens/HomeScreen";
import io from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function App() {
  const socket = io("http://192.168.100.13:3000", {
    extraHeaders: {
      access_token: AsyncStorage.getItem("access_token"),
    },
  });
  useEffect(() => {
    socket.on("connect", () => {
      // setIsConnected(true);
      // console.log("test");
    });

    return () => {
      socket.off("connect");
    };
  }, []);
  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
      <View style={styles.container}>
        <StatusBar style={"light"} />
        <Navigator />
        {/* <HomeScreen /> */}
        {/* <LoginScreen /> */}
      </View>
      {/* </NavigationContainer> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
