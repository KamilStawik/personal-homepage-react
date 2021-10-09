import { useDispatch, useSelector } from 'react-redux';
import { selectDarkTheme, toggleDarkTheme } from '../../homepageSlice';
import { ReactComponent as DarkModeOff } from '../../../../images/darkModeOff.svg';
import { ReactComponent as DarkModeOn } from '../../../../images/darkModeOn.svg';
import TopText from './../../../../common/TopText'
import { StyledButton } from './styled';

const DarkModeToggler = () => {

    const dispatch = useDispatch();
    const darkTheme = useSelector(selectDarkTheme);

    return (
        <StyledButton onClick={() => dispatch(toggleDarkTheme())} >
            <TopText>{darkTheme ? "dark mode on" : "dark mode off"}</TopText>
            {darkTheme ? <DarkModeOn /> : <DarkModeOff />}
        </StyledButton >
    );
}
export default DarkModeToggler;