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
// Theme
import {
	NavigationContainer,
	DarkTheme as NavigationDarkTheme,
	DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import merge from "deepmerge";
import { useColorScheme } from "react-native";
import { PreferencesContext } from "./store/PreferencesContext";

const AllRiddlesRoute = () => <AllRiddles></AllRiddles>;
const BookmarksRoute = () => <Bookmarks></Bookmarks>;
const SettingsRoute = () => <Settings></Settings>;

const App = () => {
	const [isThemeDark, setIsThemeDark] = React.useState(false);
	const colorScheme = useColorScheme();
	// const isDarkMode = colorScheme === "dark";
	// console.log(colorScheme);
	const toggleTheme = React.useCallback(() => {
		return setIsThemeDark(!isThemeDark);
	}, [isThemeDark]);

	const preferences = React.useMemo(
		() => ({
			toggleTheme,
			isThemeDark,
		}),
		[toggleTheme, isThemeDark]
	);

	const theme = isThemeDark
		? {
				...DefaultTheme,
				roundness: 3,

				colors: {
					...DefaultTheme.colors,
					background: "#00071f",
					riddleContainer: "#2b0053",
				},
		  }
		: {
				MD3LightTheme,
				roundness: 3,
				colors: {
					...MD3LightTheme.colors,
					background: "#83a0ff",
					riddleContainer: "#e3ebff",
					answerText: "red",
				},
		  };

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
			<PreferencesContext.Provider value={preferences}>
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
							activeColor={theme.colors.onPrimaryContainer}
							inactiveColor={colors.gray100}
							style={{ fontFamily: "Vazirmatn-Regular" }}
							onLayout={onLayoutRootView}
							sceneAnimationEnabled={true}
							sceneAnimationType="shifting"
						/>
					</PaperProvider>
				</BookmarksContextProvider>
			</PreferencesContext.Provider>
		</SafeAreaProvider>
	);
};

export default App;
