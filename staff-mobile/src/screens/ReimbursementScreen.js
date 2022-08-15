import { StyleSheet, Text } from "react-native";

const ReimbursementScreen = () => {
  return <Text style={styles.container}>TEST Reimbursement</Text>;
};

export default ReimbursementScreen;
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
