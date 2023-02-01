import { StyleSheet, View, Text } from "react-native";

function RiddleItem({ question, answer }) {
	return (
		<View style={styles.container}>
			<Text style={styles.questionText}>{question}</Text>
			<Text style={styles.answerText}>{answer}</Text>
		</View>
	);
}
export default RiddleItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	questionText: {
		color: "white",
	},
	answerText: {
		color: "red",
	},
});
