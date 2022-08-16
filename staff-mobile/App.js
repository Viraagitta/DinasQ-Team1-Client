import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import LoginScreen from "./src/screens/LoginScreen";
import { Provider } from "react-redux";
import store from "./src/store";
import { NavigationContainer } from "@react-navigation/native";
// import { navigationRef } from "./RootNavigation";
import Navigator from "./src/navigation/Navigator";
import HomeScreen from "./src/screens/HomeScreen";
export default function App() {
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
