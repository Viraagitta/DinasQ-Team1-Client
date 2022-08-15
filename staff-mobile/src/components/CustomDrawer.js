import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UpdatePassModal from "./UpdatePassModal";

const CustomDrawer = (props) => {
  const navigation = useNavigation();

  const toLogout = (e) => {
    e.preventDefault();
    AsyncStorage.clear();
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "white" }}
      >
        {/* https://hotelska.com/wp-content/uploads/2020/03/2.png */}
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/free-photo/stacks-coins-arranged-bar-graph_35913-2518.jpg?w=1060&t=st=1660291565~exp=1660292165~hmac=a9a9f281d74f16b851f775ab28fe6b4a10b5be955bb0cf17b4f61e13da01377b",
          }}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../assets/D.png")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
              marginLeft: 70,
            }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
            }}
          ></Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
        <UpdatePassModal />
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://web.whatsapp.com/")}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://st2.depositphotos.com/1116329/7584/v/600/depositphotos_75840613-stock-illustration-vector-modern-phone-icon-in.jpg",
              }}
              style={{
                height: 40,
                width: 20,
              }}
            />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 10,
              }}
            >
              Chat Now On Whatsapp
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={(e) => toLogout(e)}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 8,
              }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
