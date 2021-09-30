import { Wrapper, Photo, Header, IntroductionSpan, InfoContainer } from './styled';
import TopText from './../../../common/TopText'
import DarkModeToggler from './DarkModeToggler';
import HireMeButton from './HireMeButton';

const PersonalInfo = () => (
    <Wrapper>
        <Photo />
        <InfoContainer>
            <DarkModeToggler />
            <TopText>this is</TopText>
            <Header>Kamil Stawik</Header>
            <IntroductionSpan>
                👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.
            </IntroductionSpan>
            <HireMeButton />
        </InfoContainer>
    </Wrapper>
);

export default PersonalInfo;