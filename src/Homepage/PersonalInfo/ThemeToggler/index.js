import { useDispatch, useSelector } from 'react-redux';
import { selectDarkTheme, toggleDarkTheme } from '../../homepageSlice';
import { ReactComponent as DarkModeOff } from './../../../images/darkModeOff.svg';
import { ReactComponent as DarkModeOn } from './../../../images/darkModeOn.svg';
import { StyledButton, ThemeTogglerText } from './styled';

const ThemeToggler = () => {
    const dispatch = useDispatch();
    const darkTheme = useSelector(selectDarkTheme);

    return (
        <StyledButton onClick={() => dispatch(toggleDarkTheme())} >
            <ThemeTogglerText>{darkTheme ? "dark mode on" : "dark mode off"}</ThemeTogglerText>
            {darkTheme ? <DarkModeOn /> : <DarkModeOff />}
        </StyledButton >
    );
}

export default ThemeToggler;