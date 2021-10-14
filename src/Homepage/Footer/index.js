import TopText from '../../common/TopText';
import { EncouragingText, SocialMediaWrapper, StyledMail, Wrapper } from './styled';
import encouragingText from './../content/encouragingText';
import GitHubIcon from '../../common/GitHubIcon';
import { mailAddress } from './../content/links.js'

const Footer = () => (

    <Wrapper>
        <TopText>let's talk!</TopText>
        <StyledMail href={`mailto:${mailAddress}`}>{mailAddress}</StyledMail>
        <EncouragingText>{encouragingText}</EncouragingText>
        <SocialMediaWrapper>
            <GitHubIcon socialMedia />
        </SocialMediaWrapper>
    </Wrapper>
);

export default Footer;

