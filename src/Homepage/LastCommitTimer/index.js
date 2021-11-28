import { useSelector } from 'react-redux';
import GitHubIcon from '../../common/GitHubIcon';
import { selectApplicationStatus, selectRepositories } from '../homepageSlice';
import { getTime } from './getTime';

const LastCommitTimer = () => {

    const repositories = useSelector(selectRepositories);
    const applicationStatus = useSelector(selectApplicationStatus);

    let { days, hours, minutes, seconds } = getTime(repositories, applicationStatus);

    return (
        <div>
            <GitHubIcon />
            mój timer
            {applicationStatus === "success" && `dni: ${days}, godzin: ${hours}, minut: ${minutes}, sekund: ${seconds}`}
        </div>
    );
};

export default LastCommitTimer;