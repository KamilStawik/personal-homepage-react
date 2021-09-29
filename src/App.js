// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import Container from './common/Container';
import PersonalInfo from './features/PersonalInfo';
import SkillsSection from './features/SkillsSection';
import skillSetContent from './skillSetContent';
import futureSkillsContent from './futureSkillsContent'
import Portfolio from './features/Portfolio';

function App() {

  const [response, setResponse] = useState("");
  const [appStatus, setAppStatus] = useState("loading");
  const demoDelay = 5000;

  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.github.com/users/KamilStawik/repos")
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(response => setResponse(response))
        .then(setAppStatus("succes"))
        .catch(error =>
          console.log(error));
    }, demoDelay);
  }, []);

  setTimeout(() => {
    console.log(response);
  }, 10000);

  return (
    <Container>
      <PersonalInfo />
      <SkillsSection title={"My skillset includes 🛠️"} content={skillSetContent} />
      <SkillsSection title={"What I want to learn next"} content={futureSkillsContent} />
      <Portfolio />
      <ul>
        {appStatus === "succes" &&
          response.map(repository => (
            <li key={repository.id}>{repository.name}, {repository.html_url}</li>
          ))
        }
      </ul>
    </Container>
  );
}

export default App;
