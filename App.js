import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import AllRiddles from "./screens/AllRiddles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Favorites from "./screens/Favorites";
import Settings from "./screens/Settings";

const AllRiddlesRoute = () => <AllRiddles></AllRiddles>;

const BookmarksRoute = () => <Favorites></Favorites>;

const SettingsRoute = () => <Settings></Settings>;

const App = () => {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{
			key: "settings",
			title: "تنظیمات",
			focusedIcon: "cog",
			unfocusedIcon: "cog",
		},
		{
			key: "bookmarks",
			title: "نشان شده",
			focusedIcon: "bookmark-multiple",
			unfocusedIcon: "bookmark-multiple-outline",
		},
		{
			key: "riddles",
			title: "چیستان‌ها",
			focusedIcon: "head-question",
			unfocusedIcon: "head-question-outline",
		},
	]);

	const renderScene = BottomNavigation.SceneMap({
		settings: AllRiddlesRoute,
		bookmarks: BookmarksRoute,
		riddles: SettingsRoute,
	});

	return (
		<SafeAreaProvider>
			<BottomNavigation
				navigationState={{ index, routes }}
				onIndexChange={setIndex}
				renderScene={renderScene}
			/>
		</SafeAreaProvider>
	);
};

export default App;
