// import logo from './logo.svg';
import PersonalInfo from './features/PersonalInfo';
import SkillsSection from './features/SkillsSection';
import skillSetContent from './skillSetContent';
import futureSkillsContent from './futureSkillsContent'

function App() {
  return (
    <>
      <PersonalInfo />
      <SkillsSection title={"My skillset includes 🛠️"} content={skillSetContent} />
      <SkillsSection title={"What I want to learn next"} content={futureSkillsContent} />
    </>
  );
}

export default App;
