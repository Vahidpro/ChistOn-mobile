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
		...DefaultTheme.colors,
		primary: "tomato",
		secondary: "yellow",
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
