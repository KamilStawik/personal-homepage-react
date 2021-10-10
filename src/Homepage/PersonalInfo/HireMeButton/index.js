import { StyledButton, ButtonText } from './styled';
import { MessageIcon } from './MessageIcon';
import mailAddress from './../../content/mailAddress'

const HireMeButton = () => (
    <StyledButton href={`mailto:${mailAddress}`}>
        <MessageIcon />
        <ButtonText>Hire Me</ButtonText>
    </StyledButton>
);

export default HireMeButton;