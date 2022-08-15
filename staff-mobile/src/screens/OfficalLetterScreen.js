import { StyleSheet, Text } from "react-native";

const OfficialLetterScreen = () => {
  return <Text style={styles.container}>TEST Official Letter</Text>;
};

export default OfficialLetterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    // flexWrap: "wrap",
    // flexDirection: "row",

    // marginTop: 35,
    // padding: 5,
    // alignItems: "center",
    justifyContent: "center",
  },
});
