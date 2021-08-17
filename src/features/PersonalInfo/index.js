import { Wrapper, Photo, TopSpan, Header, IntroductionSpan, InfoContainer } from "./styled"
import DarkModeToggler from "./DarkModeToggler"
import HireMeButton from "./HireMeButton";

const PersonalInfo = () => (
    <Wrapper>
        <Photo />
        <InfoContainer>
            <DarkModeToggler />
            <TopSpan>this is</TopSpan>
            <Header>Kamil Stawik</Header>
            <IntroductionSpan>
                👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.
            </IntroductionSpan>
            <HireMeButton />
        </InfoContainer>
    </Wrapper>
);

export default PersonalInfo