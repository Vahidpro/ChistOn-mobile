import { StyleSheet } from "react-native";
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
