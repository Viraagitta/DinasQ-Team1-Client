import { useEffect, useState } from "react";
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
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import OfficialLetterCard from "../components/OfficialLetterCard";
import { allOfficialLetterByLoggedIn } from "../store/action";
import FormLetters from "../components/FormLetters";
import Ionicons from "react-native-vector-icons/Ionicons";
const OfficialLetterScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const officialLetters = useSelector((state) => state.letter.officialLetters);
  // console.log(officialLetters.Reimbursement, "<<<<");
  useEffect(() => {
    dispatch(allOfficialLetterByLoggedIn());
  }, []);
  const renderItem = ({ item }) => {
    return <OfficialLetterCard letters={item} />;
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={30} style={styles.bars} />
        </TouchableOpacity>
        <Text style={styles.title}>List Official Letter</Text>
      </View>
      <View />
      <View style={{ marginLeft: 9 }}>
        <FormLetters />
      </View>
      {officialLetters.length !== 0 ? (
        <FlatList
          data={officialLetters}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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

export default OfficialLetterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  title: {
    marginTop: 51,
    marginLeft: 72,
    fontSize: 19,
  },
});
