import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice(
    {
        name: 'homepage',
        initialState: {
            repositories: [
                {
                    id: 1,
                    content: "test",
                },
            ],
        },

        redusers: {
            getRepositories: ({ repositories }, { payload }) => {
                repositories.push(payload);
            },
        },
    });

export const { getRepositories } = homepageSlice.actions;
export const selectRepositories = state => state.homepage.repositories;
export default homepageSlice.reducer;