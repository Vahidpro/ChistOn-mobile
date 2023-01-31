import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import AllRiddles from "./screens/AllRiddles";
import Favorites from "./screens/Favorites";
import Settings from "./screens/Settings";

export default function App() {
	const Tab = createBottomTabNavigator();
	return (
		<>
			<StatusBar style="auto" />
			<Text>This is working!</Text>
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen name="چیستان ها" component={AllRiddles}></Tab.Screen>
					<Tab.Screen name="مورد علاقه" component={Favorites}></Tab.Screen>
					<Tab.Screen name="تنظیمات" component={Settings}></Tab.Screen>
				</Tab.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
