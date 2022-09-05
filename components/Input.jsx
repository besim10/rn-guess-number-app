import { TextInput, StyleSheet } from "react-native";
const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    height: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
export default Input;
