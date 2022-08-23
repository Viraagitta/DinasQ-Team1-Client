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
    // navigation.navigate("Main");
    dispatch(
      createReimbursement(form, (err) => {
        console.log(err);
        ToastAndroid.show(err, ToastAndroid.SHORT);
      })
    );
    alert("success");
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
              <Text style={styles.modalText}>Create New Reimbursement</Text>
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
                placeholder="Choose One Activity"
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
                style={styles.select}
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
                style={styles.select}
              />
              <SelectedImage
                onChangeImage={(image) => handleChange(image, "image")}
              />
              <View style={styles.action}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPressIn={(e) => {
                    setModalVisible(!modalVisible);
                    submitForm(e);
                  }}
                >
                  <Text style={styles.textStyle}>SUBMIT</Text>
                </Pressable>
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
          <Text style={styles.textStyle}>Create Reimbursement</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // marginLeft: 19,
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: Constants.statusBarHeight,
  },
  modalView: {
    // margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    height: 700,
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
    marginLeft: 5,
  },
  buttonOpen: {
    backgroundColor: "#256D85",
    width: 150,
  },
  buttonClose: {
    backgroundColor: "#3CCF4E",
    marginLeft: 20,
  },
  cancelButton: {
    backgroundColor: "#256D85",
    marginLeft: 8,
  },
  textStyle: {
    fontSize: 10,
    padding: 5,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    // marginBottom: 15,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
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
    marginTop: 16,
    marginLeft: 23,
  },
  select: {
    width: 300,
    height: 40,
    borderWidth: 0,
    marginTop: 5,
    marginLeft: 23,
  },
  action: {
    marginTop: 13,
    flexDirection: "row",
  },
});

export default FormReimbursement;
