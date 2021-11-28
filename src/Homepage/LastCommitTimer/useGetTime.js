import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectApplicationStatus, selectRepositories } from "./../homepageSlice";

const useGetTime = () => {

    const repositories = useSelector(selectRepositories);
    const applicationStatus = useSelector(selectApplicationStatus);

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    let sortedRepositories = [];

    const timePeriods = [
        {
            name: "days",
            seconds: 86400,
            value: 0,
        },
        {
            name: "hours",
            seconds: 3600,
            value: 0,
        },
        {
            name: "minutes",
            seconds: 60,
            value: 0,
        },
        {
            name: "seconds",
            seconds: 1,
            value: 0,
        },
    ];

    const sortRepositories = () => {
        repositories.forEach(repository => sortedRepositories.push(new Date(repository.updated_at)));
        sortedRepositories = sortedRepositories.sort((a, b) => b - a);
    };

    sortRepositories();

    useEffect(() => {
        const intervalId = setInterval(() => {
            let timeDifference = ((new Date() - sortedRepositories[0]) / 1000).toFixed(0);
            applicationStatus === "success" &&
                timePeriods.forEach(timePeriod => {
                    switch (timePeriod.name) {
                        case "days":
                            setDays((Math.floor(timeDifference / timePeriod.seconds)).toFixed());
                            timeDifference = timeDifference % timePeriod.seconds;
                            console.log(`ustawiono dni na ${days}`);
                            break;
                        case "hours":
                            setHours((Math.floor(timeDifference / timePeriod.seconds)).toFixed());
                            timeDifference = timeDifference % timePeriod.seconds;
                            console.log(`ustawiono godziny na ${hours}`);
                            break;
                        case "minutes":
                            setMinutes((Math.floor(timeDifference / timePeriod.seconds)).toFixed());
                            timeDifference = timeDifference % timePeriod.seconds;
                            console.log(`ustawiono minuty na ${minutes}`);
                            break;
                        default:
                            setSeconds((Math.floor(timeDifference / timePeriod.seconds)).toFixed());
                            timeDifference = timeDifference % timePeriod.seconds;
                            console.log(`ustawiono sekundy na ${seconds}`);
                            break;
                    };
                });
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, [applicationStatus]);


    // const days = timePeriods.find(timePeriod => timePeriod.name === "day").value;
    // const hours = timePeriods.find(timePeriod => timePeriod.name === "hour").value;
    // const minutes = timePeriods.find(timePeriod => timePeriod.name === "minute").value;
    // const seconds = timePeriods.find(timePeriod => timePeriod.name === "second").value;

    console.log(`wynik z getTime ${seconds}`);


    return { days, hours, minutes, seconds };
};

export default useGetTime;