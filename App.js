import * as React from "react";
import { BottomNavigation, Button, Text } from "react-native-paper";
import AllRiddles from "./screens/AllRiddles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Settings from "./screens/Settings";
import { colors } from "./constants/colors";
import { Provider as PaperProvider } from "react-native-paper";
import Bookmarks from "./screens/Bookmarks";

const AllRiddlesRoute = () => <AllRiddles></AllRiddles>;

const BookmarksRoute = () => <Bookmarks></Bookmarks>;

const SettingsRoute = () => <Settings></Settings>;

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
			<PaperProvider>
				<BottomNavigation
					navigationState={{ index, routes }}
					onIndexChange={setIndex}
					renderScene={renderScene}
					shifting={true}
					barStyle={{ backgroundColor: colors.primary800 }}
					// activeColor="white"
					inactiveColor={colors.gray100}
				/>
			</PaperProvider>
		</SafeAreaProvider>
	);
};

export default App;
