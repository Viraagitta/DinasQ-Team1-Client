import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function GenreCard({ letters }) {
  // console.log(genres.name);
  // const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <ImageBackground
          style={styles.logo}
          source={{
            uri: "https://hotelska.com/wp-content/uploads/2020/03/2.png",
          }}
        >
          <View style={styles.inner}>
            <Text style={styles.color}>{letters.activityName}</Text>
            <View style={{ marginTop: 20, alignItems: "center" }}>
              <Text style={styles.color}>
                {letters.from} - {letters.to}
              </Text>
              <Text style={styles.color}>
                {letters.leaveDate} - {letters.returnDate}
              </Text>
              {letters.status === "pending" ? (
                <Text style={styles.colorStatus}>{letters.status}</Text>
              ) : letters.status === "approved" ? (
                <Text style={styles.colorStatusApproved}>{letters.status}</Text>
              ) : (
                <Text style={styles.colorStatusRejected}>{letters.status}</Text>
              )}
              <Text style={styles.color}>{letters.updatedBy}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(4,4,4,0.5)",
    height: "100%",
    width: "100%",
  },
  color: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  colorStatus: {
    fontSize: 18,
    color: "yellow",
    fontWeight: "bold",
  },
  colorStatusApproved: {
    fontSize: 18,
    color: "lime",
    fontWeight: "bold",
  },
  colorStatusRejected: {
    fontSize: 18,
    color: "lightcoral",
    fontWeight: "bold",
  },
  logo: {
    margin: 10,
    borderRadius: 12,
    width: 320,
    height: 180,
  },
});
