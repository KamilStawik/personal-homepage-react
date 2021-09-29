// import logo from './logo.svg';
import Container from './common/Container';
import PersonalInfo from './features/homepage/PersonalInfo';
import SkillsSection from './features/homepage/SkillsSection';
import skillSetContent from './skillSetContent';
import futureSkillsContent from './futureSkillsContent';
import Portfolio from './features/homepage/Portfolio';

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