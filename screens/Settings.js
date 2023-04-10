import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
	Divider,
	IconButton,
	List,
	MD3Colors,
	Switch,
	useTheme,
} from "react-native-paper";
import { PreferencesContext } from "../store/PreferencesContext";
import * as WebBrowser from "expo-web-browser";

function Settings() {
	const theme = useTheme();
	const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

	return (
		<View style={styles.mainContainer}>
			<ScrollView>
				<List.Subheader
					style={[
						styles.listSubheader,
						{
							marginTop: 80,
						},
					]}
				>
					تنظیمات ظاهری
				</List.Subheader>
				<View
					style={[
						styles.container,
						{ backgroundColor: theme.colors.primaryContainer },
					]}
				>
					<Switch
						value={isThemeDark}
						onValueChange={toggleTheme}
						color="#ff5ed7"
					/>
					<Text
						style={[styles.text, { color: theme.colors.onPrimaryContainer }]}
					>
						حالت تاریک
					</Text>
				</View>
				<Divider style={styles.dividerStyle}></Divider>
				{/* References */}
				<List.Section>
					<List.Subheader style={styles.listSubheader}>
						منابع چیستان‌ها{" "}
						<Text style={styles.listSubheaderHint}>
							(برای ورود روی منبع ضربه بزنید.)
						</Text>
					</List.Subheader>
					<List.Item
						style={styles.listItem}
						title="سایت مجله ای‌سنج"
						titleStyle={{ fontFamily: "Vazirmatn-Regular", textAlign: "auto" }}
						right={(props) => <List.Icon {...props} icon="web" />}
						onPress={() =>
							WebBrowser.openBrowserAsync(
								"https://esanj.ir/mag/riddles-and-puzzles-with-answers"
							)
						}
					></List.Item>
					<List.Item
						style={styles.listItem}
						title="سایت سیدرضا بازیار"
						titleStyle={{ fontFamily: "Vazirmatn-Regular", textAlign: "auto" }}
						right={(props) => <List.Icon {...props} icon="web" />}
						onPress={() =>
							WebBrowser.openBrowserAsync(
								"https://www.seyedrezabazyar.com/fa/interesting-riddles-with-answers/"
							)
						}
					></List.Item>
				</List.Section>
				<Divider style={styles.dividerStyle}></Divider>
				<Pressable android_ripple={(color = "#ffffff")}>
					<List.Item
						style={styles.listItem}
						title="نسخه نرم افزار"
						description="۱.۵.۳"
						titleStyle={{ fontFamily: "Vazirmatn-Regular", textAlign: "auto" }}
						descriptionStyle={{
							fontFamily: "Vazirmatn-Regular",
							textAlign: "right",
						}}
						right={(props) => <List.Icon {...props} icon="information" />}
					></List.Item>
				</Pressable>
				<Divider style={styles.dividerStyle}></Divider>
				<View>
					<View style={styles.socialContainer}>
						<IconButton
							icon="github"
							iconColor={MD3Colors.primary90}
							size={40}
							onPress={() =>
								WebBrowser.openBrowserAsync("https://www.github.com/vahidpro/")
							}
							style={styles.social}
						/>
						<IconButton
							icon="twitter"
							iconColor={MD3Colors.primary90}
							size={40}
							onPress={() =>
								WebBrowser.openBrowserAsync("https://www.twitter.com/vahidpr/")
							}
							style={styles.social}
						/>
						<IconButton
							icon="web"
							iconColor={MD3Colors.primary90}
							size={40}
							onPress={() =>
								WebBrowser.openBrowserAsync("https://vahidpro.github.io/cv/")
							}
							style={styles.social}
						/>
					</View>
					<Text
						style={[styles.credit, { color: theme.colors.onPrimaryContainer }]}
					>
						طراحی و توسعه با ❤️ توسط{" "}
						<Text
							style={[styles.name, { color: theme.colors.developerNameColor }]}
						>
							وحید پُرکی{" "}
						</Text>
						۱۴۰۲
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}
export default Settings;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "flex-end",
		alignItems: "center",
		height: 60,
		borderRadius: 16,
		paddingHorizontal: 15,
		marginHorizontal: 10,
		marginBottom: 20,
	},
	text: {
		fontFamily: "Vazirmatn-Regular",
		fontSize: 18,
	},
	dividerStyle: {
		// marginTop: 20,
		marginHorizontal: 10,
		backgroundColor: "#d7b4ff31",
		borderRadius: 24,
		height: 2,
	},
	listItem: {
		fontFamily: "Vazirmatn-Bold",
	},
	listSubheader: {
		fontFamily: "Vazirmatn-Bold",
		textAlign: "auto",
		fontSize: 18,
	},
	listSubheaderHint: {
		fontFamily: "Vazirmatn-Regular",
		textAlign: "auto",
		fontSize: 14,
		color: "#4538ff",
		margin: 20,
	},
	credit: {
		fontFamily: "Vazirmatn-Regular",
		textAlign: "center",
		fontSize: 16,
		margin: 20,
	},
	name: {
		marginHorizontal: 20,
		fontWeight: 800,
	},
	social: {
		marginHorizontal: 20,
	},
	socialContainer: {
		marginHorizontal: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});
