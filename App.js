import * as React from "react";
import { BottomNavigation, adaptNavigationTheme } from "react-native-paper";
import AllRiddles from "./screens/AllRiddles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Settings from "./screens/Settings";
import { colors } from "./constants/colors";
import {
	Provider as PaperProvider,
	MD3DarkTheme as DefaultTheme,
} from "react-native-paper";
import Bookmarks from "./screens/Bookmarks";
import { StatusBar } from "expo-status-bar";
import BookmarksContextProvider from "./store/bookmarks-context";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
// import {
// 	NavigationContainer,
// 	DarkTheme as NavigationDarkTheme,
// 	DefaultTheme as NavigationDefaultTheme,
// } from "@react-navigation/native";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
// import merge from "deepmerge";

const AllRiddlesRoute = () => <AllRiddles></AllRiddles>;
const BookmarksRoute = () => <Bookmarks></Bookmarks>;
const SettingsRoute = () => <Settings></Settings>;

// const CombinedDefaultTheme = merge(MD3DarkTheme, LightTheme);
// const CombinedDarkTheme = merge(MD3LightTheme, DarkTheme);
const theme = {
	...DefaultTheme,
	roundness: 3,
	dark: true,
	mode: "adaptive",

	colors: {
		...MD3DarkTheme.colors,
		background: "#00071f",
	},
};

// const { LightTheme, DarkTheme } = adaptNavigationTheme({
// 	light: NavigationDefaultTheme,
// 	dark: NavigationDarkTheme,
// });
const App = () => {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{
			key: "riddles",
			title: "چیستان‌ها",
			focusedIcon: "head-question",
			unfocusedIcon: "head-question-outline",
		},
		{
			key: "bookmarks",
			title: "نشان شده",
			focusedIcon: "bookmark-multiple",
			unfocusedIcon: "bookmark-multiple-outline",
		},
		{
			key: "settings",
			title: "تنظیمات",
			focusedIcon: "cog",
			unfocusedIcon: "cog",
		},
	]);
	// Load Fonts
	const [fontsLoaded] = useFonts({
		"Vazirmatn-Regular": require("./assets/fonts/Vazirmatn-Regular.ttf"),
		"Vazirmatn-Bold": require("./assets/fonts/Vazirmatn-Bold.ttf"),
	});
	const onLayoutRootView = React.useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	const renderScene = BottomNavigation.SceneMap({
		riddles: AllRiddlesRoute,
		settings: SettingsRoute,
		bookmarks: BookmarksRoute,
	});

	return (
		<SafeAreaProvider>
			<StatusBar style="light"></StatusBar>
			<BookmarksContextProvider>
				<PaperProvider theme={theme}>
					<BottomNavigation
						navigationState={{ index, routes }}
						onIndexChange={setIndex}
						renderScene={renderScene}
						shifting={true}
						barStyle={{
							backgroundColor: theme.colors.surface,
						}}
						activeColor="white"
						inactiveColor={colors.gray100}
						style={{ fontFamily: "Vazirmatn-Regular" }}
						onLayout={onLayoutRootView}
						sceneAnimationEnabled={true}
						sceneAnimationType="shifting"
					/>
				</PaperProvider>
			</BookmarksContextProvider>
		</SafeAreaProvider>
	);
};

export default App;
