// import logo from './logo.svg';
import Container from './common/Container';
import PersonalInfo from './features/PersonalInfo';
import SkillsSection from './features/SkillsSection';
import skillSetContent from './skillSetContent';
import futureSkillsContent from './futureSkillsContent'
import Portfolio from './features/Portfolio';

function App() {
  return (
    <Container>
      <PersonalInfo />
      <SkillsSection title={"My skillset includes 🛠️"} content={skillSetContent} />
      <SkillsSection title={"What I want to learn next"} content={futureSkillsContent} />
      <Portfolio />
    </Container>
  );
}

export default App;