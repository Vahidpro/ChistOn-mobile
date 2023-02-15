import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

function RiddleItem({ question, answer }) {
	const [fontsLoaded] = useFonts({
		"Vazirmatn-Regular": require("../assets/fonts/Vazirmatn-Regular.ttf"),
		"Vazirmatn-Bold": require("../assets/fonts/Vazirmatn-Bold.ttf"),
	});
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View onLayout={onLayoutRootView} style={styles.container}>
			<Text style={styles.questionText}>{question}</Text>
			<Text style={styles.answerText}>{answer}</Text>
		</View>
	);
}
export default RiddleItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 15,
		marginHorizontal: 24,
	},
	questionText: {
		color: "white",
		fontFamily: "Vazirmatn-Regular",
		fontSize: 18,
	},
	answerText: {
		color: "#ffd000",
		fontFamily: "Vazirmatn-Bold",
		fontSize: 20,
		textAlign: "center",
		marginTop: 20,
	},
});
