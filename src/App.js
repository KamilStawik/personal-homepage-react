import { useSelector } from 'react-redux';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { darkTheme, lightTheme } from './theme';
import Homepage from './Homepage';
import { selectDarkTheme } from './Homepage/homepageSlice';

function App() {

  const isDarkTheme = useSelector(selectDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme === true ? darkTheme : lightTheme}>
      <Normalize />
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;