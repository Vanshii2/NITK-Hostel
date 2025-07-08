import { useEffect, useState } from 'react'

const getLocalValue = (key, initValue) => {
	if (typeof window === undefined) return initValue;

	const value = JSON.parse(localStorage.getItem(key));
	if (value !== undefined) return value;

	if (initValue instanceof Function) return initValue();

	return initValue;
}

const useLocalStorage = (key, initvalue) => {
	const [value, setValue] = useState(getLocalValue(key, initvalue));

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value])

	return [value, setValue];
}

export default useLocalStorage;