import { TouchableOpacity } from "react-native-gesture-handler";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
// import AddNewLetters from "./AddNewLetters";
// import ModalForm from "../components/ModalForm";
import FormLetters from "../components/FormLetters";
import FormReimbursement from "../components/FormReimburse";
import ModalForm from "../components/ModalForm";
// import SelectedImage from "../components/SelectedImage";
// import PickImage from "../components/PickImage";
const AbsenceScreen = ({ navigation }) => {
  return (
    // <View style={styles.container}>
    <SafeAreaView style={[styles.container]}>
      {/* <StatusBar style={"dark"} /> */}
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
            uri: "https://img.freepik.com/premium-photo/businessman-protection-money-table-with-tree_34152-1752.jpg?w=996",
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
          WELCOME TO DINASQ
        </Text>
        <View style={{ marginTop: 40 }}>
          <ModalForm />
        </View>
        {/* <PickImage /> */}
      </ScrollView>
      <View style={{ flexDirection: "row" }}>
        <Ionicons
          style={styles.footerBar}
          name="home-outline"
          size={24}
          color="white"
        />
        <Image
          style={styles.footer}
          source={require("../assets/Logo-DinasQ2.jpeg")}
        />
      </View>
    </SafeAreaView>
    // </View>
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
    // marginLeft: 20,
    width: 400,
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
