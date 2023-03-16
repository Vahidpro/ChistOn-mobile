import RiddleList from "../components/RiddleList";
import { RIDDLES } from "../data/riddles-data";
import React from "react";
function AllRiddles() {
	return (
		<>
			<RiddleList riddles={RIDDLES}></RiddleList>
		</>
	);
}
export default React.memo(AllRiddles);
