import { useEffect, useState } from "react";

export default function useLocalStorage(key, initial) {
    const [value, setValue] = useState(() => {
        return getLocalValue(key, initial);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue]
}

function getLocalValue(key: unknown, initial: unknown) {
    const localValue = JSON.parse(localStorage.getItem(key));

    if (localValue instanceof Function) return initial();

    return initial;
}