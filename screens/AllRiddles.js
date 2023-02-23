import { StyleSheet, Text } from "react-native";
import RiddleList from "../components/RiddleList";
import { RIDDLES } from "../data/riddles-data";
function AllRiddles() {
	return (
		<>
			<RiddleList riddles={RIDDLES}></RiddleList>
		</>
	);
}
export default AllRiddles;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
