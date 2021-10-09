export const getRepositoriesFromApi = async () => {

    const response = await fetch("https://api.github.com/users/KamilStawik/repos");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};