import TopText from '../../common/TopText';
import { EncouragingText, SocialMediaWrapper, StyledMail, Wrapper } from './styled';
import encouragingTextContent from './encouragingTextContent';
import { GitHubIcon } from '../Portfolio/GitHubIcon';
import mailAddress from './../content/mailAddress'

const Footer = () => (

    <Wrapper>
        <TopText>let's talk!</TopText>
        <StyledMail href={`mailto:${mailAddress}`}>{mailAddress}</StyledMail>
        <EncouragingText>{encouragingTextContent}</EncouragingText>
        <SocialMediaWrapper>
            <GitHubIcon socialMediaSection />
        </SocialMediaWrapper>
    </Wrapper>
);

export default Footer;

