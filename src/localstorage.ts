const setLocalStorageTimer = (key: string, value: string) => {
	let item = value;

	localStorage.setItem(key, JSON.stringify(item));
};

const getLocalStorage = (key: string) => {
	let item = localStorage.getItem(key);
	if (item === null) return null;

	item = JSON.parse(item);
	return item;
};

export { setLocalStorageTimer, getLocalStorage }