import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice(
    {
        name: 'homepage',
        initialState: {
            repositories: [],
        },

        reducers: {
            fetchRepositoriesFromApi: () => { },
            setRepositories: ({ repositories }, { payload }) => {
                repositories.push(payload);
            },
        },
    });

export const { fetchRepositoriesFromApi, setRepositories } = homepageSlice.actions;
export const selectRepositories = state => state.homepage.repositories;
export default homepageSlice.reducer;