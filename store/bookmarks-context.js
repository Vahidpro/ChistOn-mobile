import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const BookmarksContext = createContext({
	ids: [],
	addBookmark: (id) => {},
	removeBookmark: (id) => {},
});

function BookmarksContextProvider({ children }) {
	const [riddleIds, setRiddleIds] = useState([]);

	const getData = async () => {
		try {
			const restoredRiddles = await AsyncStorage.getItem("@riddles");
			if (restoredRiddles !== null) {
				let restoredRiddlesToArray = JSON.parse(restoredRiddles);
				setRiddleIds(restoredRiddlesToArray);
			}
		} catch (e) {
			// error reading value
		}
	};
	useEffect(() => {
		getData();
	}, []);

	const storeData = async (id) => {
		try {
			const jsonBookmarks = JSON.stringify([...riddleIds, id]);
			await AsyncStorage.setItem("@riddles", jsonBookmarks);
		} catch (e) {
			console.log(e);
		}
	};
	const removeData = async (id) => {
		try {
			const restoredRiddles = await AsyncStorage.getItem("@riddles");
			const newArray = restoredRiddles ? JSON.parse(restoredRiddles) : [];
			const updatedArray = newArray.filter((item) => item !== id);
			await AsyncStorage.setItem("@riddles", JSON.stringify(updatedArray));
		} catch (e) {
			console.log(e);
		}
	};

	function addBookmark(id) {
		setRiddleIds((curId) => [...curId, id]);
		storeData(id);
	}
	function removeBookmark(id) {
		setRiddleIds((curId) => curId.filter((riddleId) => riddleId !== id));
		removeData(id);
	}

	const value = {
		ids: riddleIds,
		addBookmark: addBookmark,
		removeBookmark: removeBookmark,
	};

	return (
		<BookmarksContext.Provider value={value}>
			{children}
		</BookmarksContext.Provider>
	);
}

export default BookmarksContextProvider;
