import { StyleSheet, View } from "react-native";
import RiddleItem from "./RiddleItem";
import { useTheme } from "react-native-paper";
import React from "react";
import { FlashList } from "@shopify/flash-list";

function renderRiddleItem(itemData) {
	return <RiddleItem {...itemData.item}></RiddleItem>;
}

function RiddleList({ riddles }) {
	const theme = useTheme();

	return (
		<View
			style={[styles.container, { backgroundColor: theme.colors.background }]}
		>
			<FlashList
				data={riddles}
				renderItem={renderRiddleItem}
				// keyExtractor={(item) => item.id}
				estimatedItemSize={100}
			></FlashList>
		</View>
	);
}
export default React.memo(RiddleList);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 30,
	},
});
