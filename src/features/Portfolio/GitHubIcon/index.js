import styled from "styled-components";
import { ReactComponent as GitHub } from "../../../iconly/gitHub.svg";

export const GitHubIcon = styled(GitHub)`
    fill: ${({ theme }) => (theme.colors.scienceBlue)};
    display: block;
    margin: auto;
`;