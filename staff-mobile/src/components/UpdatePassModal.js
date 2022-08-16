import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Button,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { updatePassword } from "../store/action";

const UpdatePassModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    password: "",
  });
  const handleChange = (text, name) => {
    const getForm = {
      password: form.password,
    };

    getForm[name] = text;
    setForm(getForm);
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(updatePassword(form));
    setForm("");
    navigation.navigate("Main");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Form Change Password Has Been Closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>CHANGE PASSWORD</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                type="password"
                placeholder="Input New Password"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => handleChange(text, "password")}
                value={form.password}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPressIn={(e) => {
                  setModalVisible(!modalVisible);
                  submitForm(e);
                }}
              >
                <Text style={styles.textStyle}>SUBMIT</Text>
              </Pressable>
              <View style={{ marginTop: 10 }}>
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
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Change Password</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
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
    borderRadius: 18,
    padding: 10,
    elevation: 2,
    marginTop: 5,
  },
  buttonOpen: {
    backgroundColor: "#1e90ff",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  cancelButton: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
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
    borderWidth: 1,
    padding: 10,
    width: 230,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 16,
    // marginTop: 16,
  },
});

export default UpdatePassModal;
