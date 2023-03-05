import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { useFonts } from "expo-font";
import { useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Switch, useTheme } from "react-native-paper";
function Settings() {
	const [isSwitchOn, setIsSwitchOn] = useState(true);
	const theme = useTheme();
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

	const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: theme.colors.primaryContainer },
			]}
		>
			<Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
			<Text style={[styles.text, { color: theme.colors.onPrimaryContainer }]}>
				حالت تاریک
			</Text>
		</View>
	);
}
export default Settings;

const styles = StyleSheet.create({
	container: {
		marginTop: 80,
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "flex-end",
		alignItems: "center",
		height: 60,
		borderRadius: 12,
		paddingHorizontal: 15,
	},
	text: {
		fontFamily: "Vazirmatn-Regular",
		fontSize: 18,
	},
});
