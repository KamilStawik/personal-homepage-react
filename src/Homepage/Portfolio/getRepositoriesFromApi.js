export const getRepositoriesFromApi = async () => {

    const response = await fetch("https://api.github.com/users/KamilStawik/repos");

    if (!response.ok) {
        throw "Git connection error";
    }

    return await response.json();
};