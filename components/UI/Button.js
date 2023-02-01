import { StyleSheet, View, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { colors } from "../../constants/colors";

function Button({ children, onPress, style }) {
	return (
		<View style={style}>
			<Pressable
				style={({ pressed }) => pressed && styles.pressed}
				onPress={onPress}
			>
				<View style={styles.button}>
					<Text style={styles.buttonText}>{children}</Text>
				</View>
			</Pressable>
		</View>
	);
}
export default Button;

const styles = StyleSheet.create({
	button: {
		borderRadius: 4,
		padding: 4,
		backgroundColor: colors.primary500,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.75,
		backgroundColor: colors.primary100,
		borderRadius: 6,
	},
});
