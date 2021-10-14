import styled, { css } from 'styled-components';

export const StyledButton = styled.a`
    background-color: ${({ theme }) => theme.colors.mainBlue};
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    padding: 12px 16px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    line-height: 24px;
    letter-spacing: 0.05em;
    cursor: pointer;
    display: flex;
    align-self: flex-start;

    ${({ gitButton }) => gitButton && css`
        align-self: center;
        margin-top: 32px;
    `}

    &:hover {
        box-shadow: 2px -2px 0px #8CC2FF,
        -2px 2px 0px #8CC2FF,
        2px 2px 0px #8CC2FF,
        -2px -2px 0px #8CC2FF;
    }

    &:active {
        box-shadow: inset 0px 2px 0px #144620;
    }
`;

export const ButtonText = styled.span`
    font-size: 20px;
    margin-left: 12px;

    ${({ gitButton }) => gitButton && css`
        margin: 0px;
    `}
    
    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 18px;
    }
`;