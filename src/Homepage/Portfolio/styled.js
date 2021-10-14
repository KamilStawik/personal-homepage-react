import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Subtitle = styled.span`
    display: block;
    text-align: center;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.secondFont};
    margin-bottom: 24px;

    ${({ loadingText }) => loadingText && css`
        margin-top: 88px;
        margin-bottom: 48px;
    `}

    ${({ errorText }) => errorText && css`
        margin: 0px;
    `}

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 16px;
        
        ${({ loadingText }) => loadingText && css`
        margin-top: 48px;
    `}
    }
`;

export const TilesWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`;

export const ErrorText = styled.span`
    display: block;
    text-align: center;
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.secondFont};

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 18px;
    }
`;