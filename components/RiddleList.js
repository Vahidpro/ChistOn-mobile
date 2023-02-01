import { FlatList, StyleSheet, View } from "react-native";
import { colors } from "../constants/colors";
import { RIDDLES } from "../data/riddles-data";
import RiddleItem from "./RiddleItem";

function renderRiddleItem(itemData) {
	return <RiddleItem {...itemData.item}></RiddleItem>;
}

function RiddleList({ riddles }) {
	return (
		<View style={styles.container}>
			<FlatList
				data={riddles}
				renderItem={renderRiddleItem}
				keyExtractor={(item) => item.id}
			></FlatList>
		</View>
	);
}
export default RiddleList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary800,
	},
});
