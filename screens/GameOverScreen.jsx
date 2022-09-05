import { View, StyleSheet, Text, Button } from "react-native";
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number Was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default GameOverScreen;