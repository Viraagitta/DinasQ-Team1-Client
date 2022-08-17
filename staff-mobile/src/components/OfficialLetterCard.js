import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { fetchReimbursementByLoggedInSuccess } from "../store/action";
import { useDispatch } from "react-redux";

export default function OfficialLetterCard({ letters }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const toDetail = (reimbursement) => {
    navigation.navigate("ReimbursementScreen");
    dispatch(fetchReimbursementByLoggedInSuccess(reimbursement));
  };
  return (
    <TouchableOpacity onPress={() => toDetail(letters.Reimbursements)}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <View style={styles.inner}>
            <Text style={styles.title}>{letters.activityName}</Text>
            <View style={styles.card}>
              <Text style={styles.color}>
                {letters.from} - {letters.to}
              </Text>
              <Text style={styles.color}>
                {letters.leaveDate} - {letters.returnDate}
              </Text>
              <Text style={styles.color}>Updated by: {letters.updatedBy}</Text>
              {letters.status === "Rejected" ? (
                <Text style={styles.colorStatusRejected}>{letters.status}</Text>
              ) : letters.status === "Approved" ? (
                <Text style={styles.colorStatusApproved}>{letters.status}</Text>
              ) : (
                <Text style={styles.colorStatus}>{letters.status}</Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  inner: {
    // position: "absolute",
    // justifyContent: "center",
    // alignItems: "center",
    // flex: 1,
    backgroundColor: "#F9F9F9",
    height: 150,
    marginLeft: 5,
    width: 380,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  color: {
    marginTop: 2,
    fontSize: 14,
    color: "#345B63",
    fontWeight: "bold",
  },
  colorStatus: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#F4E06D",
    width: 80,
    padding: 2,
    textAlign: "center",
    borderRadius: 8,
    marginLeft: 282,
    marginTop: 19,
  },
  colorStatusApproved: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#3CCF4E",
    width: 84,
    padding: 2,
    textAlign: "center",
    borderRadius: 8,
    marginLeft: 280,
    marginTop: 19,
  },
  colorStatusRejected: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    width: 84,
    padding: 2,
    textAlign: "center",
    borderRadius: 8,
    marginLeft: 280,
    marginTop: 19,
    backgroundColor: "#FF6363",
  },
  logo: {
    margin: 10,
    borderRadius: 12,
    width: 320,
    height: 180,
  },
  title: {
    // marginLeft: 2,
    fontSize: 18,
    marginTop: 3,
    marginLeft: 8,
    fontWeight: "bold",
    color: "#1F1D36",
  },
  card: {
    marginLeft: 8,
  },
  status: {
    flexDirection: "row",
    marginTop: 15,
  },
});
