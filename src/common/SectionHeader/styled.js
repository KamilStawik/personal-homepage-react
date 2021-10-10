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
`;