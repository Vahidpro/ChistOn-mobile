import { FlatList, StyleSheet, View } from "react-native";
import RiddleItem from "./RiddleItem";
import { useTheme } from "react-native-paper";
import React from "react";

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
					initialNumToRender={5}
				></FlatList>
			</View>
		</View>
	);
}
export default React.memo(RiddleList);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	innerContainer: {
		marginTop: 30,
	},
});
