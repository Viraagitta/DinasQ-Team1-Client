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
  ToastAndroid,
} from "react-native";
import Constants from "expo-constants";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import {
  allOfficialLetterByLoggedIn,
  createReimbursement,
} from "../store/action";
import SelectedImage from "./SelectedImage";
import DropDownPicker from "react-native-dropdown-picker";

const FormReimbursement = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    OfficialLetterId: "",
    description: "",
    category: "",
    cost: "",
    image: "",
  });
  const handleChange = (text, name) => {
    const getForm = {
      OfficialLetterId: form.OfficialLetterId,
      description: form.description,
      category: form.category,
      cost: form.cost,
      image: form.image,
    };

    getForm[name] = text;
    setForm(getForm);
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      createReimbursement(form, (err) => {
        console.log(err);
        ToastAndroid.show(err, ToastAndroid.SHORT);
      })
    );
    // navigation.navigate("Main");
    setForm("");
  };
  const [officialLetterOpen, setOfficialLetterOpen] = useState(false);
  const [categoryOpen, setcategoryOpen] = useState(false);
  const [officialLetterValue, setOfficialLetterValue] = useState(null);
  const [value, setValue] = useState();
  const [items, setItems] = useState([
    { label: "Transport", value: "Transport" },
    { label: "Accomodation", value: "Accomodation" },
    { label: "Entertaint", value: "Entertaint" },
    { label: "Others", value: "Others" },
  ]);

  const officialLetters = useSelector((state) => state.letter.officialLetters);

  useEffect(() => {
    dispatch(allOfficialLetterByLoggedIn());
  }, []);
  // console.log(form.OfficialLetterLabel);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Form Reimbursement Has Been Closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>CREATE NEW REIMBURSEMENT</Text>
              <DropDownPicker
                placeholder="Choose One Activity By Official Letters"
                open={officialLetterOpen}
                value={officialLetterValue}
                items={officialLetters.map((officialLetter) => ({
                  label: officialLetter.activityName,
                  value: officialLetter.id,
                }))}
                setValue={setOfficialLetterValue}
                setOpen={setOfficialLetterOpen}
                onChangeValue={(id) => {
                  if (id !== form.OfficialLetterId)
                    handleChange(id, "OfficialLetterId");
                }}
                style={{ marginTop: 15 }}
              />
              <TextInput
                style={styles.input}
                type="text"
                name="description"
                placeholder="Description of Costs"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => handleChange(text, "description")}
                value={form.description}
              />
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                name="cost"
                placeholder="Total Cost"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => handleChange(text, "cost")}
                value={form.cost}
              />
              <DropDownPicker
                placeholder="Choose a Category That Relates To Your Costs"
                open={categoryOpen}
                value={value}
                items={items}
                setOpen={setcategoryOpen}
                setValue={setValue}
                setItems={setItems}
                onChangeValue={(value) => handleChange(value, "category")}
                style={{ marginTop: 15 }}
              />
              <SelectedImage
                onChangeImage={(image) => handleChange(image, "image")}
              />
              <Pressable
                style={[styles.button, styles.buttonClose, { marginTop: 10 }]}
                onPressIn={(e) => {
                  // setModalVisible(!modalVisible);
                  submitForm(e);
                }}
              >
                <Text style={styles.textStyle}>SUBMIT</Text>
              </Pressable>
              <View style={{ marginTop: 15 }}>
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
          <Text style={styles.textStyle}>Create New Reimbursement</Text>
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
    paddingTop: Constants.statusBarHeight,
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
  },
  buttonOpen: {
    backgroundColor: "mediumseagreen",
    marginBottom: 10,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  cancelButton: {
    backgroundColor: "red",
  },
  textStyle: {
    fontSize: 20,
    padding: 5,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    // marginBottom: 15,
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
    width: 290,
    borderRadius: 10,
    backgroundColor: "white",
    // marginBottom: 16,
    marginTop: 16,
  },
});

export default FormReimbursement;
