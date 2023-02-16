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
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// paper provider
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";

// Keep the splash screen visible while fetch resources
SplashScreen.preventAutoHideAsync();
export default function App() {
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
	const Tab = createMaterialBottomTabNavigator();

	const theme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			primary: "tomato",
			secondary: "yellow",
		},
	};
	return (
		<>
			<StatusBar style="light" />
			<PaperProvider theme={theme}>
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={{ tabBarActiveBackgroundColor: "red" }}
						tabBarActiveTintColor={colors.primary900}
						activeColor={colors.primary500}
						inactiveColor={colors.primary100}
						barStyle={{ backgroundColor: colors.primary800 }}
						shifting={true}
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
			</PaperProvider>
		</>
	);
}
AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
