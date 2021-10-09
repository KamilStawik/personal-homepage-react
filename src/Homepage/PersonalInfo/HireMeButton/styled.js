import styled from 'styled-components';

export const StyledButton = styled.button`
    border: none;
    background-color: ${({ theme }) => (theme.colors.scienceBlue)};
    color: ${({ theme }) => (theme.colors.white)};
    padding: 12px 16px;
    border: 1px solid ${({ theme }) => (theme.colors.grey)};
    border-radius: 4px;
    line-height: 24px;
    letter-spacing: 0.05em;
    cursor: pointer;
    align-self: flex-start;
    display: flex;

    &:hover {
        box-shadow: 2px -2px 0px ${({ theme }) => (theme.colors.anakiwa)},
        -2px 2px 0px ${({ theme }) => (theme.colors.anakiwa)},
        2px 2px 0px ${({ theme }) => (theme.colors.anakiwa)},
        -2px -2px 0px ${({ theme }) => (theme.colors.anakiwa)};
    }

    &:active {
        box-shadow: inset 0px 2px 0px ${({ theme }) => (theme.colors.parsley)};
    }
`;

export const ButtonText = styled.span`
    margin-left: 12px;
`;
