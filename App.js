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
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";

// Keep the splash screen visible while fetch resources
SplashScreen.preventAutoHideAsync();
export default function App() {
	const [appIsReady, setAppIsReady] = useState(false);

	const [fontsLoaded] = useFonts({
		"Vazirmatn-Regular": require("./assets/fonts/Vazirmatn-Regular.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}
	const Tab = createBottomTabNavigator();
	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={{
						onLayout: onLayoutRootView,
						headerStyle: { backgroundColor: colors.primary800 },
						headerTintColor: "white",
						headerTitleStyle: { fontFamily: "Vazirmatn-Regular" },
						headerTitleAlign: "center",
						tabBarStyle: { backgroundColor: colors.primary800 },
						tabBarActiveTintColor: colors.primary50,
						tabBarInactiveTintColor: colors.gray100,
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
