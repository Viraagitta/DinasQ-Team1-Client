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

import FormLetters from "../components/FormLetters";
import FormReimbursement from "../components/FormReimburse";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          {/* <Image
            style={styles.bars}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/54/54878.png",
            }}
          /> */}
          {/* <ion-icon name="menu-outline"></ion-icon> */}
          <Ionicons name="menu-outline" size={30} style={styles.bars} />
        </TouchableOpacity>
        {/* <Image
          style={styles.logo}
          source={require("../assets/Logo-DinasQ2.jpeg")}
        /> */}
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container} />
        <Image
          style={styles.banner}
          source={require("../assets/undraw_Mobile_encryption_re_yw3o.png")}
        />
        <Text style={styles.title}>Everything you {"\n"}need in one app</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi
        </Text>
        <View style={styles.link}>
          <View>
            <FormLetters />
          </View>
          <View>
            <FormReimbursement />
          </View>
        </View>
        {/* <PickImage /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
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
    // marginLeft: 5,
    width: 360,
    height: 290,
    marginTop: 45,
  },
  bars: {
    marginTop: 28,
    marginBottom: 20,
    marginLeft: 12,
    width: 95,
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
    fontSize: 30,
    textAlign: "center",
    marginLeft: 5,
  },
  text: {
    textAlign: "center",
    color: "#2C3639",
  },
  link: {
    marginTop: 40,
    flexDirection: "row",
    marginLeft: 32,
  },
});
