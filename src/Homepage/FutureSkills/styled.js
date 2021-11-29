import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 40px 0px;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        margin: 20px 0px;
        padding: 10px;
    }
`;

export const FutureSkillsText = styled.span`
    display: block;
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.secondFont};
    
    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 16px;
    }
`;