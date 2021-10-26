const localStorageKey = "darkTheme";

export const saveThemeInLocalStorage = (darkTheme) =>
    localStorage.setItem(localStorageKey, JSON.stringify(darkTheme));

export const getThemeFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKey)) || null;