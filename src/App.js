// import logo from './logo.svg';
import PersonalInfo from './features/PersonalInfo';
import './App.css';
import SkillSet from './features/SkillSet';

function App() {
  return (
    <>
      <PersonalInfo />
      <SkillSet />
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </>
  );
}

export default App;
