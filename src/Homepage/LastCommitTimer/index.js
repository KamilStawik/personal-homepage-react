import { useSelector } from 'react-redux';
import GitHubIcon from '../../common/GitHubIcon';
import { selectApplicationStatus, selectRepositories } from '../homepageSlice';
import { getTime } from './getTime';

const LastCommitTimer = () => {

    const repositories = useSelector(selectRepositories);
    const applicationStatus = useSelector(selectApplicationStatus);

    const timePeriods = getTime(repositories, applicationStatus);
    const days = timePeriods.find(timePeriod => timePeriod.name === "day");
    const hours = timePeriods.find(timePeriod => timePeriod.name === "hour");
    const minutes = timePeriods.find(timePeriod => timePeriod.name === "minute");
    const seconds = timePeriods.find(timePeriod => timePeriod.name === "second");

    return (
        <div>
            <GitHubIcon />
            mój timer
            {applicationStatus === "success" && `dni: ${days.value}, godzin: ${hours.value}, minut: ${minutes.value}, sekund: ${seconds.value}`}
        </div>
    );
};

export default LastCommitTimer;