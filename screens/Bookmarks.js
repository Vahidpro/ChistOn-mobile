import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { useFonts } from "expo-font";
import { useCallback, useContext } from "react";
import * as SplashScreen from "expo-splash-screen";
import { ActivityIndicator, MD3Colors } from "react-native-paper";
import { BookmarksContext } from "../store/bookmarks-context";
import { RIDDLES } from "../data/riddles-data";
import RiddleList from "../components/RiddleList";

function Favorites() {
	const bookmarkRiddlesCtx = useContext(BookmarksContext);

	const bookmarkedRiddles = RIDDLES.filter((riddle) =>
		bookmarkRiddlesCtx.ids.includes(riddle.id)
	);

	// Fonts
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

	// Contents

	if (bookmarkedRiddles.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>هنوز هیچ چیستانی رو نشان نکردی! 🤷</Text>
			</View>
		);
	}

	return (
		<>
			<RiddleList riddles={bookmarkedRiddles}></RiddleList>
		</>
	);
}
export default Favorites;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary900,
		color: "white",
		fontFamily: "Vazirmatn-Regular",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		backgroundColor: colors.primary900,
		marginVertical: 15,
		marginHorizontal: 24,
		fontSize: 18,
		color: "white",
		fontFamily: "Vazirmatn-Regular",
		marginTop: 40,
	},
});
