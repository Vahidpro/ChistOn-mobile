import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Switch, useTheme } from "react-native-paper";
import { PreferencesContext } from "../store/PreferencesContext";

function Settings() {
	const theme = useTheme();
	const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: theme.colors.primaryContainer },
			]}
		>
			<Switch value={isThemeDark} onValueChange={toggleTheme} color="#ff5ed7" />
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
		borderRadius: 16,
		paddingHorizontal: 15,
		marginHorizontal: 10,
	},
	text: {
		fontFamily: "Vazirmatn-Regular",
		fontSize: 18,
	},
});
