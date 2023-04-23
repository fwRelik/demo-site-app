import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

export default function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>, () => T] {
	const getValue = useCallback((): T => {
		if (typeof window === 'undefined') return initialValue;

		try {
			const item = localStorage.getItem(key);
			return item ? (parseJSON(item) as T) : initialValue;
		} catch (ex) {
			console.warn(`Error reading key "${key}" >> `, ex);
			return initialValue;
		}
	}, [key, initialValue]);

	const [storedValue, setStoredValue] = useState<T>(getValue);

	const setValue: SetValue<T> = useCallback(
		(value: any) => {
			if (typeof window === 'undefined') return console.warn(`Doesn't match client side.`);

			try {
				const newValue = value instanceof Function ? value(storedValue) : value;
				setStoredValue(newValue);
				localStorage.setItem(key, JSON.stringify(newValue));
			} catch (ex) {
				console.warn(`Error key "${key}":`, ex);
			}
		},
		[key, initialValue]
	);

	useEffect(() => {
		setStoredValue(getValue());
	}, []);

	return [storedValue, setValue, getValue];
}

const parseJSON = <T>(value: string | null): T | undefined => {
	try {
		return !value ? undefined : JSON.parse(value ?? '');
	} catch {
		console.error('Parsing error on', { value });
		return undefined;
	}
};
