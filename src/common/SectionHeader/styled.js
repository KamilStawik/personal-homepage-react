import styled, { css } from 'styled-components';

export const StyledHeader = styled.h2`
    font-weight: 900;
    font-size: 30px;
    margin: 0px 0px 48px 0px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => (theme.colors.secondFont)};

    ${({ portfolio }) => portfolio && css`
        text-align: center;
        margin-top: 12px;
        margin-bottom: 8px;
    `}
    
    @media (max-width: ${({ theme }) => (theme.breakPoints.mobileMax)}px) {
        font-size: 18px;
        margin: 0px 0px 24px 0px;

        ${({ portfolio }) => portfolio && css`
            margin: 12px 0px 16px 0px;
        `}
    }
`;