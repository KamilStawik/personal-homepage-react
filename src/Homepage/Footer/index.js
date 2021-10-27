import TopText from '../../common/TopText';
import { EncouragingText, SocialMediaLink, LinkedInIcon, SocialMediaWrapper, StyledMail, Wrapper } from './styled';
import encouragingText from './../content/encouragingText';
import GitHubIcon from '../../common/GitHubIcon';
import { mailAddress, gitHubAddress, linkInAddress } from './../content/links.js'

const Footer = () => (
    <Wrapper>
        <TopText>let's talk!</TopText>
        <StyledMail href={`mailto:${mailAddress}`} title={mailAddress} target="_blank" rel="noreferrer">{mailAddress}</StyledMail>
        <EncouragingText>{encouragingText}</EncouragingText>
        <SocialMediaWrapper>
            <SocialMediaLink href={gitHubAddress} title="gitHub" target="_blank" rel="noreferrer">
                <GitHubIcon socialMedia />
            </SocialMediaLink>
            <SocialMediaLink href={linkInAddress} title="linkedIn" target="_blank" rel="noreferrer">
                <LinkedInIcon />
            </SocialMediaLink>
        </SocialMediaWrapper>
    </Wrapper>
);

export default Footer;