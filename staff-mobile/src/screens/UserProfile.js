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

import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../store/action";
import { useEffect } from "react";

const UserProfile = ({ navigation }) => {
  const dispatch = useDispatch();

  const detailUser = useSelector((state) => state.user.detailUser);
  useEffect(() => {
    dispatch(getUserDetail());
  }, []);
  console.log(detailUser);
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
            uri: "https://us.123rf.com/450wm/arhimicrostok/arhimicrostok1707/arhimicrostok170703657/81645393-connection-mark-user-sign-icon-person-symbol-human-avatar-flat-style-.jpg",
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
          {`${detailUser.firstName} ${detailUser.lastName} \n ${detailUser.position}`}
        </Text>
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 20,
          }}
        >
          Email : {detailUser.email}
        </Text>
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Phone Number : {detailUser.phoneNumber}
        </Text>
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Address : {detailUser.address}
        </Text>
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
  );
};

export default UserProfile;
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
    width: 250,
    height: 220,
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
