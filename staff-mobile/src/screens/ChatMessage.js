import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Pressable,
  ToastAndroid,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../store/action";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ChatMessage = ({ navigation }) => {
  const dispatch = useDispatch();

  const detailUser = useSelector((state) => state.user.detailUser);
  const [value, setValue] = useState();
  const socket = io("http://192.168.100.13:3000", {
    extraHeaders: {
      access_token: AsyncStorage.getItem("access_token"),
    },
  });
  useEffect(() => {
    dispatch(getUserDetail());
  }, []);

  useEffect(() => {
    // console.log(detailUser.id);
    if (detailUser.id) {
      socket.on(detailUser.id, (newChat) => {
        ToastAndroid.show(newChat, ToastAndroid.LONG);
      });
    }

    return () => {
      socket.off(detailUser.id);
    };
  }, [detailUser]);

  const sendChat = () => {
    socket.emit("chat", {
      receiver: `admin-${detailUser.id}`,
      message: value,
      sender: detailUser.firstName,
    });
  };

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
        <TextInput
          style={styles.input}
          name="from"
          placeholder="Chat Now"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setValue(text)}
          value={value}
        />
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={
            // setModalVisible(!modalVisible);
            sendChat
          }
        >
          <Text style={styles.textStyle}>Submit</Text>
        </Pressable>
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

export default ChatMessage;
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 5,
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
  input: {
    fontSize: 18,
    borderWidth: 1,
    padding: 12,
    width: 250,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 16,
    // marginTop: 16,
  },
});
