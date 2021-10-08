import styled from 'styled-components';

export const Subtitle = styled.h3`
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => (theme.colors.mineShaft)};
`;

export const TilesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;