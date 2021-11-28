import { useSelector } from 'react-redux';
import { selectApplicationStatus } from '../homepageSlice';
import { TimerText, Wrapper } from './styled';
import useGetTime from './useGetTime';

const LastCommitTimer = () => {
    const applicationStatus = useSelector(selectApplicationStatus);
    const { days, hours, minutes, seconds } = useGetTime();

    return (
        <Wrapper applicationStatus={applicationStatus}>
            <TimerText>
                Last commit was {days}&nbsp;{days === "1" ? "day" : "days"},
                &nbsp;{hours}&nbsp;{hours === "1" ? "hour" : "hours"}, 
                &nbsp;{minutes}&nbsp;{minutes === "1" ? "minute" : "minutes"}, {seconds}&nbsp;{seconds === "1" ? "second" : "seconds"}&nbsp;ago.
            </TimerText>
        </Wrapper>
    );
};

export default LastCommitTimer;