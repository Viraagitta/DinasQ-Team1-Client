import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ToastAndroid,
  Button,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-native-neat-date-picker";
import {
  allOfficialLetterByLoggedIn,
  createOfficialLetter,
} from "../store/action";

const FormLetters = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    activityName: "",
    from: "",
    to: "",
    leaveDate: "",
    returnDate: "",
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDateRetun, setShowDateReturn] = useState(false);
  const openDatePicker = () => {
    setShowDatePicker(true);
  };
  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false);
  };
  const onConfirm = (date) => {
    setShowDatePicker(false);
    const format = date.dateString.split("-").reverse().join("/");
    form.leaveDate = format;
  };
  const retrunConfirm = (date) => {
    setShowDateReturn(false);
    const format = date.dateString.split("-").reverse().join("/");
    form.returnDate = format;
  };

  const openDateReturn = () => {
    setShowDateReturn(true);
  };
  const onCancelReturn = () => {
    setShowDateReturn(false);
  };
  const handleChange = (text, name) => {
    const getForm = {
      activityName: form.activityName,
      from: form.from,
      to: form.to,
      leaveDate: form.leaveDate,
      returnDate: form.returnDate,
    };

    getForm[name] = text;
    setForm(getForm);
  };
  // const officialLetters = useSelector((state) => state.letter.officialLetters);

  console.log(form);
  // useEffect(() => {
  //   dispatch(allOfficialLetterByLoggedIn());
  // }, []);

  const submitForm = (e) => {
    navigation.navigate("Main");
    e.preventDefault();
    dispatch(
      createOfficialLetter(form, (err) => {
        ToastAndroid.show(err, ToastAndroid.SHORT);
      })
    );
    setForm("");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Form Official Letter Has Been Closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Create New Official Letter</Text>
              <TextInput
                style={styles.input}
                type="text"
                placeholder="Activity"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => handleChange(text, "activityName")}
                value={form.activityName}
              />
              <TextInput
                style={styles.input}
                name="from"
                placeholder="From (Type City Name)"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => handleChange(text, "from")}
                value={form.from}
              />
              <TextInput
                style={styles.input}
                name="to"
                placeholder="To (Type City Name)"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => handleChange(text, "to")}
                value={form.to}
              />
              <View>
                <Button
                  title={"leave date"}
                  onPress={openDatePicker}
                  style={styles.btn}
                />
                <DatePicker
                  isVisible={showDatePicker}
                  mode={"single"}
                  onCancel={onCancel}
                  onConfirm={onConfirm}
                />
              </View>
              <TextInput
                style={styles.input}
                name="leaveDate"
                placeholder="Leave Date"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => handleChange(text, "leaveDate")}
                value={form.leaveDate}
              />
              <View>
                <Button title={"return date"} onPress={openDateReturn} />
                <DatePicker
                  isVisible={showDateRetun}
                  mode={"single"}
                  onCancel={onCancelReturn}
                  onConfirm={retrunConfirm}
                />
              </View>
              <TextInput
                style={styles.input}
                name="returnDate"
                placeholder="Return Date"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => handleChange(text, "returnDate")}
                value={form.returnDate}
              />
              <View style={styles.action}>
                <Pressable
                  style={[styles.button, styles.buttonClose, { marginTop: 20 }]}
                  onPressIn={(e) => {
                    setModalVisible(!modalVisible);
                    submitForm(e);
                  }}
                >
                  <Text style={styles.textStyle}>SUBMIT</Text>
                </Pressable>
                <View>
                  <Pressable
                    style={[styles.button, styles.cancelButton]}
                    onPressIn={() => {
                      setModalVisible(!modalVisible), setForm("");
                    }}
                  >
                    <Text style={styles.textStyle}>CANCEL</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Create Official Letters</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  modalView: {
    // margin: 10,
    height: 700,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    // alignItems: "center",
    shadowColor: "#008000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 8,
    elevation: 2,
    width: 150,
    // marginTop: 20,
    marginLeft: 5,
  },
  buttonOpen: {
    backgroundColor: "#3CCF4E",
    width: 150,
  },
  buttonClose: {
    backgroundColor: "#3CCF4E",
  },
  cancelButton: {
    backgroundColor: "#256D85",
    marginTop: 20,
  },
  textStyle: {
    fontSize: 10,
    padding: 5,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  modalText: {
    marginTop: 12,
    // marginBottom: 15,
    fontSize: 18,
    fontWeight: "bold",
    // textAlign: "center",
  },
  error: {
    fontSize: 16,
    color: "red",
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 36,
    marginRight: 36,
  },
  input: {
    fontSize: 14,
    // borderWidth: 1,
    padding: 10,
    borderBottomColor: "#3F4E4F",
    borderBottomWidth: 1,
    width: 290,
    borderRadius: 10,
    backgroundColor: "white",
    // marginBottom: 16,
    marginTop: 19,
  },
  action: {
    marginTop: 13,
    flexDirection: "row",
  },
  btn: {
    width: 400,
  },
});

export default FormLetters;
