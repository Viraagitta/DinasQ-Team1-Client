import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomDrawer from "../components/CustomDrawer";
import OfficialLetterScreen from "../screens/OfficalLetterScreen";
import ReimbursementScreen from "../screens/ReimbursementScreen";
import AbsenceScreen from "../screens/AbsenceScreen";
import UserProfile from "../screens/UserProfile";
import ChatMessage from "../screens/ChatMessage";

const Drawer = createDrawerNavigator();

function Main() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "white",
          width: 280,
          inactiveTintColor: "white",
          drawerActiveTintColor: "white",

          textColor: "white",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Profile"
        textColor="white"
        component={UserProfile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Official Letters"
        textColor="white"
        component={OfficialLetterScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="document-attach-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Absence"
        textColor="white"
        component={AbsenceScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="location-outline" size={22} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Chat"
        textColor="white"
        component={ChatMessage}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="location-outline" size={22} color={color} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
}

export default function Navigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style={"auto"} />
      <Stack.Navigator
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "white" },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
      >
        <Stack.Screen
          title="Back"
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="ReimbursementScreen"
          component={ReimbursementScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="OfficialLetterScreen"
          component={OfficialLetterScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          screenOptions={{ headerShown: false }}
          name="ChatMessage"
          component={ChatMessage}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    textColor: "black",
  },
  scrollView: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 20,
  },
  logo: {
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 20,
    width: 80,
    height: 40,
  },
  bars: {
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 18,
    width: 17,
    height: 30,
  },
});
