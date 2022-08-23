import { TouchableOpacity } from "react-native-gesture-handler";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";

import CityLocation from "../components/CityLocation";

const AbsenceScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={30} style={styles.bars} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container} />
        <Text style={styles.title}>Absence Location</Text>
        <Text style={styles.undertitle}>Dinas Activity</Text>
        {/* <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi
        </Text> */}
        <Image
          style={styles.banner}
          source={{
            uri: "https://i.pinimg.com/originals/20/d8/73/20d8733b97d44108a7c4cc40564dff71.gif",
          }}
        />
        <Text style={styles.action}>
          Here employees can take attendance which aims to tell their location
        </Text>
        <View style={{ marginTop: 40 }}>
          <CityLocation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AbsenceScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  loading: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "white",
  },
  scrollView: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 20,
  },
  logo: {
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 10,
    width: 100,
    height: 60,
  },
  footer: {
    marginTop: 8,
    marginBottom: 10,
    marginLeft: 112,
    width: 60,
    height: 40,
  },
  banner: {
    marginBottom: 20,
    alignSelf: "center",
    // marginLeft: 20,
    width: 320,
    height: 230,
  },
  bars: {
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 18,
    width: 35,
    height: 30,
  },
  footerBar: {
    marginTop: 16,
    // marginBottom: 14,
    marginLeft: 18,
    width: 24,
    height: 30,
  },
  welcome: {
    // flex: 1,
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    // marginLeft: 82,
    fontSize: 25,
    fontWeight: "bold",
  },
  undertitle: {
    // marginLeft: 110,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  description: {
    marginTop: 12,
    textAlign: "center",
    color: "#7F8487",
    padding: 1,
  },
  action: {
    color: "#7F8487",
    textAlign: "center",
  },
});
