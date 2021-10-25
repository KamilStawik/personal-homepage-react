import { Wrapper, Photo, Header, IntroductionText, InfoContainer } from './styled';
import TopText from './../../common/TopText'
import ThemeToggler from './ThemeToggler';
import Button from './../../common/Button';
import personalInfoText from '../content/personalInfoText';

const PersonalInfo = () => (
    <Wrapper>
        <Photo />
        <ThemeToggler />
        <InfoContainer>
            <TopText>this is</TopText>
            <Header>Kamil Stawik</Header>
            <IntroductionText>{personalInfoText}</IntroductionText>
            <Button buttonText={"Hire Me"} />
        </InfoContainer>
    </Wrapper>
);

export default PersonalInfo;