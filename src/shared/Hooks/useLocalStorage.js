'use client'
import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
    // State to store our value
    // Return a function to set a new value so it can be updated dynamically
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === "undefined") {
            return initialValue; // Avoid errors during SSR
        }

        try {
            // Retrieve item from local storage using getItem
            const item = localStorage.getItem(key);
            // Parse stored json or return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If parsing fails, log the error and return initialValue
            console.error("Error parsing localStorage item", key, error);
            return initialValue;
        }
    });

    // React hook to handle side effects (updating local storage)
    useEffect(() => {
        // Only update local storage if window exists (avoid SSR errors)
        if (typeof window === "undefined") return;

        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [storedValue, key]); // Re-run only if key or storedValue changes

    return [storedValue, setStoredValue];
}