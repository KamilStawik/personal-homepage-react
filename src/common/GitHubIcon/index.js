import styled, { css } from 'styled-components';
import { ReactComponent as GitHub } from '../../images/gitHub.svg';

const GitHubIcon = styled(GitHub)`
    fill: ${({ theme }) => (theme.colors.mainBlue)};
    display: block;
    margin: auto;

    ${({ socialMediaSection }) => socialMediaSection && css`
        margin: 0px;
        width: 48px;
        fill: ${({ theme }) => (theme.colors.secondFont)};

        &:hover{
            transition: 0.5s linear;
            fill: ${({ theme }) => (theme.colors.mainBlue)};
        }
    `}
    
    @media (max-width: ${({ theme }) => (theme.breakPoints.mobileMax)}px) {
        width: 32px;
        height: 31px; 
    }
`;

export default GitHubIcon;