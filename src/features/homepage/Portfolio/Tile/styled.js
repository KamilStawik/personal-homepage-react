import styled from "styled-components";

export const StyledTile = styled.div`
    margin: 16px;
    padding: 56px;
    border: 6px solid rgba(209, 213, 218, 0.3);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    flex-basis: 40%;
    flex-grow: 1;

    &:hover {
        transition: border 1s;
        border: 6px solid rgba(3, 102, 214, 0.2);
    }
`;

export const TileHeader = styled.header`
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => (theme.colors.scienceBlue)};
`;

export const Description = styled.span`
    display: block;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => (theme.colors.slateGray)};
    margin: 24px 0px;
`;

export const KeyWord = styled.span`
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => (theme.colors.slateGray)};
    margin: 8px 0px;
`;

export const Link = styled.a`
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => (theme.colors.scienceBlue)};
    margin: 8px 0px;
`;