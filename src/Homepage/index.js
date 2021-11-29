import Container from './../common/Container';
import PersonalInfo from './PersonalInfo';
import SkillsSection from './SkillsSection';
import skillSetContent from './content/skillSetContent';
import futureSkillsContent from './content/futureSkillsContent';
import LastCommitTimer from './LastCommitTimer';
import Portfolio from './Portfolio';
import Footer from './Footer';
import FutureSkills from './FutureSkills';

const Homepage = () => (
    <Container>
        <PersonalInfo />
        <SkillsSection title={"My skillset includes"} content={skillSetContent} />
        <SkillsSection title={"What I want to learn next"} content={futureSkillsContent} />
        <FutureSkills />
        <LastCommitTimer />
        <Portfolio />
        <Footer />
    </Container>
);

export default Homepage;