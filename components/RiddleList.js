import { FlatList, StyleSheet, View } from "react-native";
import RiddleItem from "./RiddleItem";
import { useTheme } from "react-native-paper";

function renderRiddleItem(itemData) {
	return <RiddleItem {...itemData.item}></RiddleItem>;
}

function RiddleList({ riddles }) {
	const theme = useTheme();


	return (
		<View
			style={[styles.container, { backgroundColor: theme.colors.background }]}
		>
			<View>
				<FlatList
					style={styles.innerContainer}
					data={riddles}
					renderItem={renderRiddleItem}
					keyExtractor={(item) => item.id}
				></FlatList>
			</View>
		</View>
	);
}
export default RiddleList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	innerContainer: {
		marginTop: 30,
	},
});
