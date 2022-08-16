import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

// You can import from local files
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

export default function Dropdown() {
  const [form, setForm] = useState({
    category: "",
  });
  const handleChange = (text, name) => {
    const getForm = {
      category: form.category,
    };

    getForm[name] = text;
    setForm(getForm);
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Transport", value: "Transport" },
    { label: "Accomodation", value: "Accomodation" },
    { label: "Entertaint", value: "Entertaint" },
    { label: "Others", value: "Others" },
  ]);
  console.log(items);
  console.log(setItems);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={(value) => handleChange(value, "category")}
      // onChangeText={(text) => handleChange(text, "category")}
      style={{ marginTop: 15 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
    height: 200,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
