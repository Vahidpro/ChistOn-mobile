import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/bookmarks-context";
import { RIDDLES } from "../data/riddles-data";
import RiddleList from "../components/RiddleList";
import { useTheme } from "react-native-paper";

function BookmarksScreen() {
	const theme = useTheme();
	const bookmarkRiddlesCtx = useContext(BookmarksContext);

	const bookmarkedRiddles = RIDDLES.filter((riddle) =>
		bookmarkRiddlesCtx.ids.includes(riddle.id)
	);

	if (bookmarkedRiddles.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={[styles.text, { color: theme.colors.onPrimaryContainer }]}>
					هنوز هیچ چیستانی رو نشان نکردی! 🤷
				</Text>
			</View>
		);
	} else
		return (
			<>
				<RiddleList riddles={bookmarkedRiddles}></RiddleList>
			</>
		);
}
export default BookmarksScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		fontFamily: "Vazirmatn-Regular",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		marginVertical: 15,
		marginHorizontal: 24,
		fontSize: 18,
		fontFamily: "Vazirmatn-Regular",
		marginTop: 40,
	},
});
