import styled from 'styled-components';

export const StyledTile = styled.div`
    padding: 56px;
    background-color: ${({ theme }) => (theme.colors.tileBackground)};
    border: 6px solid ${({ theme }) => (theme.colors.tileBorder)};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobileMax)}px) {
        padding: 24px;
    }

    &:hover {
        transition: border 1s;
        border: 6px solid ${({ theme }) => (theme.colors.tileBorderOnHover)};
    }
`;

export const TileHeader = styled.header`
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => (theme.colors.tileHeader)};

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobileMax)}px) {
        font-size: 16px;
        line-height: 19px;
    }
`;

export const Description = styled.span`
    display: block;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => (theme.colors.mainFont)};
    margin: 24px 0px;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobileMax)}px) {
        font-size: 14px;
        margin: 16px 0px;
    }
`;

export const KeyWord = styled.span`
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => (theme.colors.mainFont)};
    margin: 8px 0px;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobileMax)}px) {
        font-size: 14px;
    }
`;

export const Link = styled.a`
    display: block;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => (theme.colors.mainBlue)};
    margin: 8px 0px;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobileMax)}px) {
        font-size: 14px;
    }
`;