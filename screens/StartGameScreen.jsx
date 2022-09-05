import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constans/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import { useState } from "react";
const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const handleInputNumber = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, " "));
  };
  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            blurOnSubmit
            autoCapitalize="none"
            keyboardType="number-pad"
            autoCorrect={false}
            maxLength={2}
            style={styles.input}
            value={enteredValue}
            onChangeText={handleInputNumber}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color={Colors.accent}
                title="RESET"
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={Colors.primary}
                title="CONFIRM"
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    marginVertical: 15,
    fontSize: 20,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  button: {
    width: 100,
  },
  input: {
    width: 40,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
export default StartGameScreen;