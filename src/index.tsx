import React from "react";

/**
 * Return the current system theme
 * @returns "dark" | "light"
 */
export const useSystemTheme = () => {
	const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
	const [isDark, setIsDark] = React.useState(isDarkTheme.matches);

	const themeListener = (e: any) => {
		setIsDark(e.matches);
	};

	React.useEffect(() => {
		isDarkTheme.addEventListener("change", themeListener);

		return () => isDarkTheme.removeEventListener("change", themeListener);
	}, []);

	return isDark ? "dark" : "light";
};

/**
 * Check if system theme is dark
 * @returns boolean
 */
export const useDarkTheme = () => {
	const [isDark] = React.useState(
		useSystemTheme() === "dark"
	);

	return isDark;
};

/**
 * Check if system theme is light
 * @returns boolean
 */
export const useLightTheme = () => {
	const [isLight] = React.useState(
		useSystemTheme() === "light"
	);

	return isLight;
};
