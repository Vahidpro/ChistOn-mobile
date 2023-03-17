import React from "react";

export const PreferencesContext = React.createContext({
	toggleTheme: () => {
		const storeData = async (status) => {
			try {
				const state = JSON.stringify(status);
				await AsyncStorage.setItem("@darkthemestate", state);
			} catch (e) {
				console.log(e);
			}
		};
	},
	isThemeDark: false,
});
