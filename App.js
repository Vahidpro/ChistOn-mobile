import * as React from "react";
import { BottomNavigation } from "react-native-paper";
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

const AllRiddlesRoute = () => <AllRiddles></AllRiddles>;

const BookmarksRoute = () => <Bookmarks></Bookmarks>;

const SettingsRoute = () => <Settings></Settings>;

const theme = {
	...DefaultTheme,
	colors: {
		primary: "rgb(191, 194, 255)",
		onPrimary: "rgb(24, 29, 140)",
		primaryContainer: "rgb(50, 57, 163)",
		onPrimaryContainer: "rgb(224, 224, 255)",
		secondary: "rgb(197, 196, 221)",
		onSecondary: "rgb(46, 47, 66)",
		secondaryContainer: "rgb(68, 69, 89)",
		onSecondaryContainer: "rgb(225, 224, 249)",
		tertiary: "rgb(232, 185, 213)",
		onTertiary: "rgb(70, 38, 59)",
		tertiaryContainer: "rgb(94, 60, 82)",
		onTertiaryContainer: "rgb(255, 216, 238)",
		error: "rgb(255, 180, 171)",
		onError: "rgb(105, 0, 5)",
		errorContainer: "rgb(147, 0, 10)",
		onErrorContainer: "rgb(255, 180, 171)",
		background: "rgb(27, 27, 31)",
		onBackground: "rgb(229, 225, 230)",
		surface: "rgb(27, 27, 31)",
		onSurface: "rgb(229, 225, 230)",
		surfaceVariant: "rgb(70, 70, 79)",
		onSurfaceVariant: "rgb(199, 197, 208)",
		outline: "rgb(145, 143, 154)",
		outlineVariant: "rgb(70, 70, 79)",
		shadow: "rgb(0, 0, 0)",
		scrim: "rgb(0, 0, 0)",
		inverseSurface: "rgb(229, 225, 230)",
		inverseOnSurface: "rgb(48, 48, 52)",
		inversePrimary: "rgb(75, 83, 188)",
		elevation: {
			level0: "transparent",
			level1: "rgb(35, 35, 42)",
			level2: "rgb(40, 40, 49)",
			level3: "rgb(45, 45, 56)",
			level4: "rgb(47, 47, 58)",
			level5: "rgb(50, 50, 62)",
		},
		surfaceDisabled: "rgba(229, 225, 230, 0.12)",
		onSurfaceDisabled: "rgba(229, 225, 230, 0.38)",
		backdrop: "rgba(48, 48, 56, 0.4)",
	},
};
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

	const renderScene = BottomNavigation.SceneMap({
		riddles: AllRiddlesRoute,
		settings: SettingsRoute,
		bookmarks: BookmarksRoute,
	});

	return (
		<SafeAreaProvider>
			<StatusBar style="light"></StatusBar>
			<PaperProvider theme={theme}>
				<BottomNavigation
					navigationState={{ index, routes }}
					onIndexChange={setIndex}
					renderScene={renderScene}
					shifting={true}
					barStyle={{ backgroundColor: colors.primary800 }}
					// activeColor="white"
					inactiveColor={colors.gray100}
					// renderLabel={{}}
				/>
			</PaperProvider>
		</SafeAreaProvider>
	);
};

export default App;
