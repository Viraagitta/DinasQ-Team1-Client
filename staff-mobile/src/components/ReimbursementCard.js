import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ReimbursementCard({ reimburse }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <ImageBackground
          style={styles.logo}
          source={{
            uri: reimburse.image,
          }}
        >
          <View style={styles.inner}>
            <Text style={styles.color}>{reimburse.description}</Text>
            <View style={{ marginTop: 30, alignItems: "center" }}>
              <Text style={styles.color}>{reimburse.category}</Text>
              <Text style={styles.color}>
                Rp
                {reimburse.cost
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </Text>
              {reimburse.status === "Rejected" ? (
                <Text style={styles.colorStatusRejected}>
                  {reimburse.status}
                </Text>
              ) : reimburse.status === "Approved" ? (
                <Text style={styles.colorStatusApproved}>
                  {reimburse.status}
                </Text>
              ) : (
                <Text style={styles.colorStatus}>{reimburse.status}</Text>
              )}
              <Text style={styles.color}>{reimburse.updatedBy}</Text>
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
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    marginLeft: 5,
  },
  colorStatus: {
    fontSize: 14,
    color: "yellow",
    fontWeight: "bold",
  },
  colorStatusApproved: {
    fontSize: 14,
    color: "lime",
    fontWeight: "bold",
  },
  colorStatusRejected: {
    fontSize: 14,
    color: "lightcoral",
    fontWeight: "bold",
  },
  logo: {
    margin: 20,
    width: 140,
    height: 180,
  },
});
