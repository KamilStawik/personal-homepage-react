import { createSlice } from '@reduxjs/toolkit';
import { getThemeFromLocalStorage } from './themeLocalStorage';

const homepageSlice = createSlice(
    {
        name: 'homepage',
        initialState: {
            repositories: [],
            darkTheme: getThemeFromLocalStorage() || false,
            applicationStatus: "loading",
        },

        reducers: {
            fetchRepositoriesFromApi: () => { },
            setRepositories: (state, { payload }) => {
                state.repositories = payload;
                state.repositories.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            },
            toggleDarkTheme: state => {
                state.darkTheme = !state.darkTheme;
            },
            setApplicationStatus: (state, { payload }) => {
                state.applicationStatus = payload;
            },
        },
    });

export const {
    fetchRepositoriesFromApi,
    setRepositories,
    toggleDarkTheme,
    setApplicationStatus,
} = homepageSlice.actions;
export const selectRepositories = state => state.homepage.repositories;
export const selectDarkTheme = state => state.homepage.darkTheme;
export const selectApplicationStatus = state => state.homepage.applicationStatus;
export default homepageSlice.reducer;