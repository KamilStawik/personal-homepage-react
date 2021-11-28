
export const getTime = (repositories, applicationStatus) => {

    let sortedRepositories = [];

    const sortRepositories = () => {
        if (applicationStatus === "success") {

            repositories.forEach(repository => sortedRepositories.push(new Date(repository.updated_at)));
            repositories.forEach(repository => { console.log(new Date(repository.updated_at)) });

        } else {
            return;
        };
    };
    
    sortRepositories();
    console.log(sortedRepositories);
    sortedRepositories = sortedRepositories.sort((a, b) => b - a);
    console.log(sortedRepositories);

    const timeDifference = ((new Date() - sortedRepositories[0]) / 1000).toFixed(0);
    console.log(timeDifference);
    let days = (Math.floor(timeDifference / 86400)).toFixed();
    console.log(`days: ${days}`);

    let modulo1 = timeDifference % 86400;
    console.log(modulo1);

    let hours = (Math.floor(modulo1 / 3600)).toFixed();
    let modulo2 = modulo1 % 3600;
    console.log(`hours: ${hours}`);

    let minutes = (Math.floor(modulo2 / 60)).toFixed();
    let modulo3 = modulo2 % 60;
    console.log(`minutes: ${minutes}`);

    let seconds = (Math.floor(modulo3)).toFixed();
    console.log(`seconds: ${seconds}`);

    return { days, hours, minutes, seconds };
};