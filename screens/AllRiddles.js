import { StyleSheet, Text } from "react-native";
import RiddleList from "../components/RiddleList";
import { RIDDLES } from "../data/riddles-data";
import { useTheme } from "react-native-paper";

function AllRiddles() {
	const theme = useTheme();
	return (
		<>
			<RiddleList
				style={{ backgroundColor: theme.colors.primary }}
				riddles={RIDDLES}
			></RiddleList>
		</>
	);
}
export default AllRiddles;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
