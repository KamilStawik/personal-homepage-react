import { Wrapper, Photo, Header, IntroductionText, InfoContainer } from './styled';
import TopText from './../../../common/TopText'
import DarkModeToggler from './DarkModeToggler';
import HireMeButton from './HireMeButton';

const PersonalInfo = () => (
    <Wrapper>
        <Photo />
        <div>
            <DarkModeToggler />
            <InfoContainer>
                <TopText>this is</TopText>
                <Header>Kamil Stawik</Header>
                <IntroductionText>
                    👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.
                </IntroductionText>
                <HireMeButton />
            </InfoContainer>
        </div>
    </Wrapper>
);

export default PersonalInfo;