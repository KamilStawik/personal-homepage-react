import { ReactComponent as DarkModeOff } from '../../../../images/darkModeOff.svg';
import { ReactComponent as DarkModeOn } from '../../../../images/darkModeOn.svg';
import TopText from './../../../../common/TopText'
import { StyledButton } from './styled';

const DarkModeToggler = () => (
    <StyledButton>
        <TopText>dark mode off</TopText>
        <DarkModeOff />
    </StyledButton>
);

export default DarkModeToggler;