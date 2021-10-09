import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyle';
import Homepage from './Homepage';

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Homepage />
    </>
  );
}

export default App;