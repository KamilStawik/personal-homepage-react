// import logo from './logo.svg';
import Container from './common/Container';
import PersonalInfo from './features/homepage/PersonalInfo';
import SkillsSection from './features/homepage/SkillsSection';
import skillSetContent from './skillSetContent';
import futureSkillsContent from './futureSkillsContent';
import Portfolio from './features/homepage/Portfolio';
import Footer from './features/homepage/Footer';

function App() {
  return (
    <Container>
      <PersonalInfo />
      <SkillsSection title={"My skillset includes 🛠️"} content={skillSetContent} />
      <SkillsSection title={"What I want to learn next"} content={futureSkillsContent} />
      <Portfolio />
      <Footer />
    </Container>
  );
}

export default App;