import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const BookmarksContext = createContext({
	ids: [],
	addBookmark: (id) => {},
	removeBookmark: (id) => {},
});

function BookmarksContextProvider({ children }) {
	const [riddleIds, setRiddleIds] = useState([]);

	const storeData = async (id) => {
		try {
			const jsonBookmarks = JSON.stringify([...riddleIds, id]);
			await AsyncStorage.setItem("@riddles", jsonBookmarks);
			console.log("saved!" + jsonBookmarks);
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
