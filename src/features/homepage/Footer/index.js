import TopText from '../../../common/TopText';
import { EncouragingText, SocialMediaWrapper, StyledMail, Wrapper } from './styled';
import encouragingTextContent from './encouragingTextContent';
import { GitHubIcon } from '../Portfolio/GitHubIcon';

const Footer = () => (

    <Wrapper>
        <TopText>let's talk!</TopText>
        <StyledMail href="mailto: kamil_stawik@op.pl">kamil_stawik@op.pl</StyledMail>
        <EncouragingText>{encouragingTextContent}</EncouragingText>
        <SocialMediaWrapper>
            <GitHubIcon socialMediaSection />
        </SocialMediaWrapper>
    </Wrapper>
);

export default Footer;