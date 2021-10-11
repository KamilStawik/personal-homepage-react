import { createSlice } from '@reduxjs/toolkit';
import { getThemeFromLocalStorage } from './themeLocalStorage';

const homepageSlice = createSlice(
    {
        name: 'homepage',
        initialState: {
            repositories: [],
            darkTheme: getThemeFromLocalStorage(),
        },

        reducers: {
            fetchRepositoriesFromApi: () => { },
            setRepositories: ({ repositories }, { payload }) => {
                repositories.push(payload);
            },
            toggleDarkTheme: state => {
                state.darkTheme = !state.darkTheme;
            }
        },
    });

export const { fetchRepositoriesFromApi, setRepositories, toggleDarkTheme } = homepageSlice.actions;
export const selectRepositories = state => state.homepage.repositories;
export const selectDarkTheme = state => state.homepage.darkTheme;
export default homepageSlice.reducer;