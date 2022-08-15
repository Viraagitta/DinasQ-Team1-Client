import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { createReimbursement, getUserdetails } from "../store/action";
import SelectedImage from "./SelectedImage";

const FormReimbursement = () => {
  // const detailUser = useSelector((state) => state.user.detailUser);
  // console.log(detailUser, "<<<");
  // useEffect(() => {
  //   dispatch(getUserdetails(id));
  // }, []);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    OfficialLetterId: "",
    description: "",
    cost: "",
    image: "",
  });
  const handleChange = (text, name) => {
    const getForm = {
      OfficialLetterId: form.OfficialLetterId,
      description: form.description,
      cost: form.cost,
      image: form.image,
    };

    getForm[name] = text;
    setForm(getForm);
  };

  const submitForm = (e) => {
    navigation.navigate("Main");
    e.preventDefault();
    dispatch(createReimbursement(form));
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
            Alert.alert("Form Official Letter has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>CREATE NEW REIMBURSEMENT</Text>
              <TextInput
                style={styles.input}
                type="text"
                placeholder="Official Letter Activity Name"
                onChangeText={(text) => handleChange(text, "OfficialLetterId")}
                value={form.OfficialLetterId}
              />
              <TextInput
                style={styles.input}
                type="text"
                name="description"
                placeholder="description"
                onChangeText={(text) => handleChange(text, "description")}
                value={form.description}
              />
              <TextInput
                style={styles.input}
                type="integer"
                name="cost"
                placeholder="Cost"
                onChangeText={(text) => handleChange(text, "cost")}
                value={form.cost}
              />
              <SelectedImage />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => {
                  setModalVisible(!modalVisible);
                  submitForm(e);
                }}
              >
                <Text style={styles.textStyle}>Create Official Letter</Text>
              </Pressable>
              <View style={{ marginTop: 10 }}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Create New Reimbursement</Text>
          </Pressable>
          {/* <View style={{ marginHorizontal: 10 }}>
          <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
          >
          <Text style={styles.textStyle}>New Reimbursement</Text>
          </Pressable>
        </View> */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#32cd32",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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
    fontSize: 18,
    borderWidth: 1,
    padding: 12,
    width: "80%",
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 16,
    marginTop: 16,
  },
});

export default FormReimbursement;
