import {
  View,
  StyleSheet,
  Image,
  Button,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constans/colors";
import MainButton from "../components/MainButton";
const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/success.png")}
            // fadeDuration={1000}
            // source={{
            //   uri: "https://static01.nyt.com/images/2021/01/20/sports/19ALTsummit-k2-2-print/19summit-k2-2-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
            // }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.hightlight}>{props.roundsNumber}</Text> rounds
            to guess the number{" "}
            <Text style={styles.hightlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    // width: 300,
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    // height: 300,
    // borderRadius: 150,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    // marginVertical: 30,
    marginVertical: Dimensions.get("window").height / 30,
  },
  hightlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    width: "80%",
    marginHorizontal: 30,
    // marginVertical: 15,
    marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});
export default GameOverScreen;
