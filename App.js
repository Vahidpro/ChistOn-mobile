import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import AllRiddles from "./screens/AllRiddles";
import Favorites from "./screens/Favorites";
import Settings from "./screens/Settings";
import { colors } from "./constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
	const Tab = createBottomTabNavigator();
	return (
		<>
			<StatusBar style="auto" />
			<Text>This is working!</Text>
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: colors.primary500 },
						tabBarStyle: { backgroundColor: colors.primary500 },
						tabBarActiveTintColor: colors.primary50,
					}}
				>
					<Tab.Screen
						name="Riddles"
						component={AllRiddles}
						options={{
							title: "چیستان ها",
							tabBarIcon: ({ color, size }) => (
								<MaterialCommunityIcons
									name="head-question"
									size={32}
									color={color}
								/>
							),
						}}
					></Tab.Screen>
					<Tab.Screen
						name="Fvorites"
						component={Favorites}
						options={{
							title: "نشان شده",
							tabBarIcon: ({ color, size }) => (
								<Ionicons name="bookmarks" size={24} color={color} />
							),
						}}
					></Tab.Screen>
					<Tab.Screen
						name="Settings"
						component={Settings}
						options={{
							title: "تنظیمات",
							tabBarIcon: ({ color, size }) => (
								<Ionicons name="settings" size={28} color={color} />
							),
						}}
					></Tab.Screen>
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
