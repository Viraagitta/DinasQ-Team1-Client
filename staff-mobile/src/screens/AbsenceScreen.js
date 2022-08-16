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
          <ImageBackground
            style={styles.bars}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/54/54878.png",
            }}
          />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../assets/Logo-DinasQ2.jpeg")}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container} />
        <Image
          style={styles.banner}
          source={{
            uri: "https://i.pinimg.com/originals/20/d8/73/20d8733b97d44108a7c4cc40564dff71.gif",
          }}
        />
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          ABSENCE
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
    height: 200,
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
});
