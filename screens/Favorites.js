import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
function Favorites() {
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
			<Text style={styles.text}>✅ در نسخه های بعدی...</Text>
		</View>
	);
}
export default Favorites;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary900,
		color: "white",
		fontFamily: "Vazirmatn-Regular",
	},
	text: {
		flex: 1,
		backgroundColor: colors.primary900,
		marginVertical: 15,
		marginHorizontal: 24,
		fontSize: 18,
		color: "white",
		fontFamily: "Vazirmatn-Regular",
	},
});
