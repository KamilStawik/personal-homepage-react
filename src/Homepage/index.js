import Container from './../common/Container';
import PersonalInfo from './PersonalInfo';
import SkillsSection from './SkillsSection';
import skillSetContent from './content/skillSetContent';
import futureSkillsContent from './content/futureSkillsContent';
import Portfolio from './Portfolio';
import Footer from './Footer';

const Homepage = () => (
    <Container>
        <PersonalInfo />
        <SkillsSection title={"My skillset includes"} content={skillSetContent} />
        <SkillsSection title={"What I want to learn next"} content={futureSkillsContent} />
        <Portfolio />
        <Footer />
    </Container>
);

export default Homepage;