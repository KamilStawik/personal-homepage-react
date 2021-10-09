import styled, { css } from 'styled-components';
import { ReactComponent as GitHub } from '../../../images/gitHub.svg';

export const GitHubIcon = styled(GitHub)`
    fill: ${({ theme }) => (theme.colors.scienceBlue)};
    display: block;
    margin: auto;

    ${({ socialMediaSection }) => socialMediaSection && css`
        margin: 0px;
        width: 48px;
        fill: ${({ theme }) => (theme.colors.mineShaft)};

        &:hover{
            transition: 0.5s linear;
            fill: ${({ theme }) => (theme.colors.scienceBlue)};
        }
    `}
`;