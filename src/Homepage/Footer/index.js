import TopText from '../../common/TopText';
import { EncouragingText, GitHubLink, SocialMediaWrapper, StyledMail, Wrapper } from './styled';
import encouragingText from './../content/encouragingText';
import GitHubIcon from '../../common/GitHubIcon';
import { mailAddress, gitHubAddress } from './../content/links.js'

const Footer = () => (

    <Wrapper>
        <TopText>let's talk!</TopText>
        <StyledMail href={`mailto:${mailAddress}`}>{mailAddress}</StyledMail>
        <EncouragingText>{encouragingText}</EncouragingText>
        <SocialMediaWrapper href={gitHubAddress}>
            <GitHubLink href={gitHubAddress}>
                <GitHubIcon socialMedia />
            </GitHubLink>
        </SocialMediaWrapper>
    </Wrapper>
);

export default Footer;

