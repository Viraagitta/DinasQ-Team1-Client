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

  // let num = 0;
  // for (let i = 0; i < detailUser.length; i++) {
  //   if (detailUser[i].OfficialLetters[0].Reimbursements.length >= 0) {
  //     num += 1;
  //   }
  // }
  useEffect(() => {
    dispatch(getUserDetail());
  }, []);
  console.log(detailUser, "<<<");
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          {/* <ImageBackground
            style={styles.bars}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/54/54878.png",
            }}
          /> */}
          <Ionicons name="menu-outline" size={30} style={styles.bars} />
        </TouchableOpacity>
        <Text style={styles.page}>user</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {/* <View style={styles.container} /> */}
        <View style={styles.userLogin}>
          <Image
            style={styles.banner}
            source={{
              uri: "https://us.123rf.com/450wm/arhimicrostok/arhimicrostok1707/arhimicrostok170703657/81645393-connection-mark-user-sign-icon-person-symbol-human-avatar-flat-style-.jpg",
            }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.name}>
              Hi, {`${detailUser.firstName} ${detailUser.lastName}`}
            </Text>
            <Text>{`${detailUser.position}`}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.information}>Email : {detailUser.email}</Text>
          <Text style={styles.phoneNumber}>
            Phone Number : {detailUser.phoneNumber}
          </Text>
          <Text style={styles.address}>Address : {detailUser.address}</Text>
        </View>
        <Text style={styles.title}> Your official letters & reimbursments</Text>
        <View style={styles.titleData}>
          <Text style={styles.numbers}>
            {detailUser.OfficialLetters.length}
          </Text>
          <Text style={styles.underNumbers}>Official Letters</Text>
        </View>
        {/* <View style={styles.titleDatareimburse}>
            <Text>
              {detailUser.OfficialLetters.map((e, i) =>
                e.OfficialLetters.Reimbursements.length ? i + 1 : "tes"
              )}
            </Text>
          </View> */}
      </ScrollView>
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
    // alignSelf: "center",
    // marginLeft: 20,
    width: 80,
    height: 60,
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
  userLogin: {
    flexDirection: "row",
  },
  name: {
    fontSize: 19,
    marginTop: 5,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 11,
    marginTop: 10,
    height: 110,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  information: {
    marginLeft: 18,
    marginTop: 20,
    color: "#2C3639",
    fontSize: 17,
  },
  phoneNumber: {
    marginTop: 2,
    marginLeft: 18,
    fontSize: 15,
    color: "#2C3639",
  },
  title: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#2C3639",
  },
  titleData: {
    // color: "#fff",
    width: 372,
    backgroundColor: "#3CCF4E",
    // marginLeft: 4,
    borderRadius: 16,
    // borderTopRightRadius: 12,
    height: 102,
    marginTop: 20,
  },
  address: {
    marginLeft: 16,
    fontSize: 16,
    color: "#2C3639",
  },
  titleDatareimburse: {
    width: 172,
    backgroundColor: "#3CCF4E",
    // borderColor: "#000",
    // borderWidth: 1,
    // marginLeft: 4,
    height: 172,
    borderRadius: 12,
    marginLeft: 22,
  },
  numbers: {
    color: "#F7F7F7",
    fontSize: 30,
    marginLeft: 10,
    marginTop: 8,
  },
  underNumbers: {
    color: "#F7F7F7",
    fontSize: 18,
    marginLeft: 10,
  },
  page: {
    marginTop: 50,
    marginLeft: 130,
    fontSize: 21,
  },
});
