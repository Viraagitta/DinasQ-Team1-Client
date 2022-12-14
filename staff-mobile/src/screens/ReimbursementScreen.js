import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import ReimbursementCard from "../components/ReimbursementCard";
import FormReimbursement from "../components/FormReimburse";
import { fetchReimbursementByLoggedIn } from "../store/action";
import io from "socket.io-client";
import { useNavigation } from "@react-navigation/native";
const ReimbursementScreen = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;
  const dispatch = useDispatch();
  const reimbursements = useSelector((state) => state.reimburse.reimbursements);

  const socket = io("http://192.168.1.102:3000", {
    jsonp: false,
    extraHeaders: {
      access_token: AsyncStorage.getItem("access_token"),
    },
  });

  useEffect(() => {
    dispatch(fetchReimbursementByLoggedIn(id));
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("semoga bisa");
    });
    socket.on("update-status-reimbursement", () => {
      dispatch(fetchReimbursementByLoggedIn(id));
    });
    return () => {
      socket.off("connect");
      socket.off("update-status-reimbursement");
    };
  }, []);

  const renderItem = ({ item }) => {
    return <ReimbursementCard reimburse={item} />;
  };

  return (
    <SafeAreaView style={[styles.container]}>
      {/* <StatusBar style={"dark"} /> */}
      <View style={{ flexDirection: "row" }}>
        {/* <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Text style={styles.bars}>Back</Text>
        </TouchableOpacity> */}
        {/* <Image
          style={styles.logo}
          source={require("../assets/Logo-DinasQ2.jpeg")}
        /> */}
      </View>

      <View style={styles.left}>
        <FormReimbursement />
      </View>
      <View />
      {reimbursements.length !== 0 ? (
        <FlatList
          numColumns={2}
          key={"#"}
          data={reimbursements}
          renderItem={renderItem}
          keyExtractor={(item) => "#" + item.id}
        />
      ) : (
        <View>
          <Text
            style={{
              color: "black",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            You have not submitted any reimbursement
          </Text>
          <Image
            style={styles.oops}
            source={{
              uri: "https://eperformance.bsn.go.id/assets/img/empty-data.png",
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ReimbursementScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 40,
    // flexDirection: "row",
  },
  scrollView: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 20,
  },
  logo: {
    marginTop: 40,
    marginLeft: 10,
    width: 100,
    height: 60,
  },
  oops: {
    marginTop: 10,
    width: 350,
    height: 200,
  },
  footer: {
    marginTop: 8,
    marginBottom: 10,
    marginLeft: 112,
    width: 60,
    height: 40,
  },
  banner: {
    width: 400,
    height: 200,
  },
  bars: {
    marginTop: 50,
    marginLeft: 18,
    width: 50,
    height: 30,
    fontSize: 20,
    color: "blue",
  },
  left: {
    marginLeft: 11,
    marginTop: 30,
  },
});
