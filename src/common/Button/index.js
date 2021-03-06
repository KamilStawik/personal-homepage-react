import { StyledButton, ButtonText } from './styled';
import { MessageIcon } from './MessageIcon';
import { mailAddress, gitHubAddress } from '../../Homepage/content/links'

const Button = ({ buttonText, gitButton }) => (
    <StyledButton href={gitButton ? gitHubAddress : `mailto:${mailAddress}`}
        title={gitButton ? "gitHub" : mailAddress}
        target="_blank"
        rel="noreferrer"
        gitButton={gitButton}
    >
        <MessageIcon $gitButton={gitButton} />
        <ButtonText gitButton={gitButton} >{buttonText}</ButtonText>
    </StyledButton >
);

export default Button;