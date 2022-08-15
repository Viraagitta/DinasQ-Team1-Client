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

const GenresScreen = ({ navigation }) => {
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

      <View />
      <FlatList
        // numColumns={2}
        data={officialLetters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default GenresScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // flexDirection: "row",
  },
  scrollView: {
    // textColor: "white",
    // flexDirection: 'row',
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
  bars: {
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 18,
    width: 17,
    height: 30,
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
});
