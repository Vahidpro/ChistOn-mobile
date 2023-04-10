import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Animated, Text } from "react-native";
import { Button, IconButton, useTheme } from "react-native-paper";
import { BookmarksContext } from "../store/bookmarks-context";

// Expand
const ExpandableView = React.memo(({ expanded = false, answer }) => {
	const [height] = useState(new Animated.Value(0));

	useEffect(() => {
		Animated.timing(height, {
			toValue: !expanded ? 100 : 0,
			duration: 400,
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
});

function RiddleItem({ number, question, answer, id }) {
	const bookmarkRiddlesCtx = useContext(BookmarksContext);
	const riddleId = id;

	const theme = useTheme();

	const [isExpanded, setIsExpanded] = useState(true);

	const riddleIsBookmarked = bookmarkRiddlesCtx.ids.includes(riddleId);

	function bookmarkPressHandler() {
		if (riddleIsBookmarked) {
			bookmarkRiddlesCtx.removeBookmark(riddleId);
		} else {
			bookmarkRiddlesCtx.addBookmark(riddleId);
		}
	}

	let fixedNum = Number(number).toLocaleString("fa-ir");

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: theme.colors.riddleContainer },
			]}
		>
			<View style={styles.questionContainer}>
				<Text style={[styles.questionText, { color: theme.colors.secondary }]}>
					{question}
				</Text>
				<Text
					style={[
						styles.questionNumber,
						{
							color: theme.colors.onBackground,
							backgroundColor: theme.colors.background,
						},
					]}
				>
					{fixedNum}
				</Text>
			</View>
			{/* Bookmark Button */}
			<View>
				<IconButton
					style={{ backgroundColor: theme.colors.onSecondary }}
					icon={riddleIsBookmarked ? "bookmark" : "bookmark-outline"}
					mode="contained"
					size={28}
					animated={true}
					accessibilityLabel="bookmark"
					onPress={bookmarkPressHandler}
				></IconButton>
			</View>
			<View style={styles.answerButton}>
				<Button
					icon="eye-outline"
					mode="contained-tonal"
					buttonColor={theme.colors.onPrimary}
					onPress={() => {
						setIsExpanded(!isExpanded);
					}}
					contentStyle={{
						width: "100%",
						height: 46,
						padding: 0,
					}}
					labelStyle={{
						fontFamily: "Vazirmatn-Bold",
						fontSize: 16,
						justifyContent: "center",
					}}
				>
					{!isExpanded ? "مخفی کردن" : "نمایش جواب"}
				</Button>
				<ExpandableView answer={answer} expanded={isExpanded} />
			</View>
		</View>
	);
}
export default React.memo(RiddleItem);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 24,
		margin: 10,
	},
	questionContainer: {
		flexDirection: "row",
		marginTop: 10,
		padding: 2,
	},
	questionText: {
		fontFamily: "Vazirmatn-Regular",
		fontSize: 18,
		paddingHorizontal: 15,
		flex: 1,
	},
	answerText: {
		color: "#ff5e00",
		fontFamily: "Vazirmatn-Bold",
		fontSize: 24,
		textAlign: "center",
		marginTop: 20,
	},
	answerButton: {
		alignContent: "center",
		alignItems: "center",
		marginBottom: 15,
		padding: 10,
	},
	questionNumber: {
		fontFamily: "Vazirmatn-Bold",
		fontSize: 24,
		textAlign: "center",
		width: 40,
		height: 40,
		borderRadius: 24,
		justifyContent: "flex-end",
		overflow: "hidden",
		marginRight: 10,
	},
});
