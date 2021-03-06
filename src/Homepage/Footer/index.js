import TopText from '../../common/TopText';
import { EncouragingText, SocialMediaLink, LinkedInIcon, SocialMediaWrapper, StyledLink, Wrapper } from './styled';
import encouragingText from './../content/encouragingText';
import GitHubIcon from '../../common/GitHubIcon';
import { mailAddress, gitHubAddress, linkedInAddress, phoneNumber } from './../content/links.js'

const Footer = () => (
    <Wrapper>
        <TopText>let's talk!</TopText>
        <StyledLink href={`mailto:${mailAddress}`} title={mailAddress} target="_blank" rel="noreferrer">{mailAddress}</StyledLink>
        <StyledLink href={`tel:${phoneNumber}`} title={phoneNumber}>{phoneNumber}</StyledLink>
        <EncouragingText>{encouragingText}</EncouragingText>
        <SocialMediaWrapper>
            <SocialMediaLink href={gitHubAddress} title="gitHub" target="_blank" rel="noreferrer">
                <GitHubIcon $socialMedia />
            </SocialMediaLink>
            <SocialMediaLink href={linkedInAddress} title="linkedIn" target="_blank" rel="noreferrer">
                <LinkedInIcon />
            </SocialMediaLink>
        </SocialMediaWrapper>
    </Wrapper>
);

export default Footer;