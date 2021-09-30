import styled, { css } from "styled-components";
import { ReactComponent as GitHub } from "../../../../iconly/gitHub.svg";

export const GitHubIcon = styled(GitHub)`
    fill: ${({ theme }) => (theme.colors.scienceBlue)};
    display: block;
    margin: auto;

    ${({ socialMediaSection }) => socialMediaSection && css`
        width: 48px;
        fill: ${({ theme }) => (theme.colors.mineShaft)};

        &:hover{
            transition: 1s linear;
            fill: ${({ theme }) => (theme.colors.scienceBlue)};
        }
    `}
`;