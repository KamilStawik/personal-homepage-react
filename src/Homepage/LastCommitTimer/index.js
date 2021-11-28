import { useSelector } from 'react-redux';
import GitHubIcon from '../../common/GitHubIcon';
import { selectApplicationStatus } from '../homepageSlice';
import useGetTime from './useGetTime';

const LastCommitTimer = () => {

    const applicationStatus = useSelector(selectApplicationStatus);

    const { days, hours, minutes, seconds } = useGetTime();

    return (
        <div>
            <GitHubIcon />
            mój timer
            {applicationStatus === "success" && `dni: ${days}, godzin: ${hours}, minut: ${minutes}, sekund: ${seconds}`}
        </div>
    );
};

export default LastCommitTimer;