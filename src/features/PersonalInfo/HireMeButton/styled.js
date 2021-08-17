import styled from "styled-components";

export const StyledButton = styled.button`
    border: none;
    background-color: ${({ theme }) => (theme.colors.scienceBlue)};
    color: ${({ theme }) => (theme.colors.white)};
    padding: 12px 16px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    line-height: 24px;
    letter-spacing: 0.05em;
    cursor: pointer;
    align-self: flex-start;
    display: flex;
`;

export const ButtonText = styled.span`
    margin-left: 12px;
`;
