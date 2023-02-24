import { createContext, useState } from "react";

export const BookmarksContext = createContext({
	ids: [],
	addBookmark: (id) => {},
	removeBookmark: (id) => {},
});

function BookmarksContextProvider({ children }) {
	const [riddleIds, setRiddleIds] = useState([]);

	function addBookmark(id) {}
	function removeBookmark(id) {}

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
