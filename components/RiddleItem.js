import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Animated,
	Text,
} from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { colors } from "../constants/colors";

function RiddleItem({ question, answer }) {
	const ExpandableView = ({ expanded = false }) => {
		const [height] = useState(new Animated.Value(0));

		useEffect(() => {
			Animated.timing(height, {
				toValue: !expanded ? 100 : 0,
				duration: 150,
				useNativeDriver: false,
			}).start();
		}, [expanded, height]);

		return (
			<Animated.View style={{ height }}>
				<View style={styles.container}>
					<Text style={styles.answerText}>{answer}</Text>
				</View>
			</Animated.View>
		);
	};
	const [isExpanded, setIsExpanded] = useState(true);
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
			<View style={styles.answerButton}>
				<TouchableOpacity
					onPress={() => {
						setIsExpanded(!isExpanded);
					}}
					style={styles.toggle}
				>
					<Text style={styles.questionText}>جواب</Text>
				</TouchableOpacity>
				<ExpandableView expanded={isExpanded} />
			</View>
		</View>
	);
}
export default RiddleItem;

const styles = StyleSheet.create({
	toggle: {
		width: "100%",
		height: 40,
		backgroundColor: "#050052",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 24,
		textAlign: "center",
	},
	toggleText: {
		color: "#fff",
	},
	container: {
		flex: 1,
		marginVertical: 15,
		marginHorizontal: 24,
		backgroundColor: "#0d102b",
		borderRadius: 24,
		margin: 10,
	},
	questionText: {
		color: "white",
		fontFamily: "Vazirmatn-Regular",
		fontSize: 18,
		paddingHorizontal: 15,
		marginTop: 10,
	},
	answerText: {
		color: "#ffd000",
		fontFamily: "Vazirmatn-Bold",
		fontSize: 20,
		textAlign: "center",
		marginTop: 20,
	},
	answerButton: {
		alignContent: "center",
		alignItems: "center",
		marginTop: 10,
		marginHorizontal: 15,
		marginBottom: 15,
		padding: 10,
	},
});
