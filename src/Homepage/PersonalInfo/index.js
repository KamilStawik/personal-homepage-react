import { Wrapper, Photo, Header, IntroductionText, InfoContainer } from './styled';
import TopText from './../../common/TopText'
import ThemeToggler from './ThemeToggler';
import Button from './../../common/Button';

const PersonalInfo = () => (
    <Wrapper>
        <Photo />
        <ThemeToggler />
        <InfoContainer>
            <TopText>this is</TopText>
            <Header>Kamil Stawik</Header>
            <IntroductionText>
                👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.
            </IntroductionText>
            <Button buttonText={"Hire Me"} />
        </InfoContainer>
    </Wrapper>
);

export default PersonalInfo;