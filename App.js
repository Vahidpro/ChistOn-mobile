import AllRiddles from "./screens/AllRiddles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Settings from "./screens/Settings";
import { colors } from "./constants/colors";
import {
	Provider as PaperProvider,
	MD3DarkTheme as DefaultTheme,
	MD3LightTheme,
	BottomNavigation,
} from "react-native-paper";
import Bookmarks from "./screens/Bookmarks";
import BookmarksContextProvider from "./store/bookmarks-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { PreferencesContext } from "./store/PreferencesContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useMemo, useState } from "react";
import { hideAsync } from "expo-splash-screen";

const AllRiddlesRoute = () => <AllRiddles></AllRiddles>;
const BookmarksRoute = () => <Bookmarks></Bookmarks>;
const SettingsRoute = () => <Settings></Settings>;

const App = () => {
	const [isThemeDark, setIsThemeDark] = useState(true);

	// Get dark theme status with AsyncStorage
	useEffect(() => {
		const getDarkModeStatus = async () => {
			try {
				const value = await AsyncStorage.getItem("isThemeDark");
				if (value !== null) {
					setIsThemeDark(JSON.parse(value));
				}
			} catch (e) {
				console.log(e);
			}
		};
		getDarkModeStatus();
	}, []);

	// Get dark theme status with AsyncStorage

	const toggleTheme = useCallback(async () => {
		try {
			await AsyncStorage.setItem("isThemeDark", JSON.stringify(!isThemeDark));
			setIsThemeDark(!isThemeDark);
		} catch (e) {
			console.log(e);
		}
	}, [isThemeDark]);

	const preferences = useMemo(
		() => ({
			toggleTheme,
			isThemeDark,
		}),
		[toggleTheme, isThemeDark]
	);

	// Defined themes

	const theme = isThemeDark
		? {
				...DefaultTheme,
				roundness: 3,

				colors: {
					...DefaultTheme.colors,
					background: "#00071f",
					riddleContainer: "#2b0053",
					answerText: "#d9ff00",
					developerNameColor: "#0072f5",
					numberingBackground: "#4d06f3a1",
				},
		  }
		: {
				MD3LightTheme,
				roundness: 3,
				colors: {
					...MD3LightTheme.colors,
					background: "#83a0ff",
					riddleContainer: "#e3ebff",
					answerText: "#910000",
					developerNameColor: "#004da5ff",
					numberingBackground: "#bd4aff77",
				},
		  };

	// Routes
	const [index, setIndex] = useState(0);
	const [routes] = useState([
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
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	// Navigation

	const renderScene = BottomNavigation.SceneMap({
		riddles: AllRiddlesRoute,
		settings: SettingsRoute,
		bookmarks: BookmarksRoute,
	});

	return (
		<SafeAreaProvider onLayout={onLayoutRootView}>
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
