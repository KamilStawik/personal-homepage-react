import styled from 'styled-components';

export const Subtitle = styled.span`
    display: block;
    text-align: center;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => (theme.colors.secondFont)};
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobileMax)}px) {
        font-size: 16px;
    }
`;

export const TilesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobileMax)}px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`;