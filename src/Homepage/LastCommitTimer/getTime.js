
export const getTime = (repositories, applicationStatus) => {

    let sortedRepositories = [];

    const timePeriods = [
        {
            name: "day",
            seconds: 86400,
            value: 0,
        },
        {
            name: "hour",
            seconds: 3600,
            value: 0,
        },
        {
            name: "minute",
            seconds: 60,
            value: 0,
        },
        {
            name: "second",
            seconds: 1,
            value: 0,
        },
    ];

    const sortRepositories = () => {
        if (applicationStatus === "success") {
            repositories.forEach(repository => sortedRepositories.push(new Date(repository.updated_at)));
            sortedRepositories = sortedRepositories.sort((a, b) => b - a);
        } else {
            return;
        };
    };

    sortRepositories();

    let timeDifference = ((new Date() - sortedRepositories[0]) / 1000).toFixed(0);

    timePeriods.forEach(timePeriod => {
        timePeriod.value = (Math.floor(timeDifference / timePeriod.seconds)).toFixed();
        timeDifference = timeDifference % timePeriod.seconds;
    });

    return timePeriods;
};