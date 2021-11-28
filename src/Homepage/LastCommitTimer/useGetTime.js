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

    const timePeriods = [
        {
            name: "days",
            seconds: 86400,
        },
        {
            name: "hours",
            seconds: 3600,
        },
        {
            name: "minutes",
            seconds: 60,
        },
        {
            name: "seconds",
            seconds: 1,
        },
    ];

    let sortedRepositories = [];
    repositories.forEach(repository => sortedRepositories.push(new Date(repository.updated_at)));
    sortedRepositories = sortedRepositories.sort((a, b) => b - a);

    useEffect(() => {
        const intervalId = setInterval(() => {
            let timeDifference = ((new Date() - sortedRepositories[0]) / 1000).toFixed(0);
            applicationStatus === "success" &&
                timePeriods.forEach(timePeriod => {
                    switch (timePeriod.name) {
                        case "days":
                            setDays((Math.floor(timeDifference / timePeriod.seconds)).toFixed());
                            timeDifference = timeDifference % timePeriod.seconds;
                            break;
                        case "hours":
                            setHours((Math.floor(timeDifference / timePeriod.seconds)).toFixed());
                            timeDifference = timeDifference % timePeriod.seconds;
                            break;
                        case "minutes":
                            setMinutes((Math.floor(timeDifference / timePeriod.seconds)).toFixed());
                            timeDifference = timeDifference % timePeriod.seconds;
                            break;
                        default:
                            setSeconds((Math.floor(timeDifference / timePeriod.seconds)).toFixed());
                            timeDifference = timeDifference % timePeriod.seconds;
                            break;
                    };
                });
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, [applicationStatus]);

    return { days, hours, minutes, seconds };
};

export default useGetTime;