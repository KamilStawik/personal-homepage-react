import styled from 'styled-components';
import { ReactComponent as LinkedIn } from './../../images/linkedIn.svg';

export const Wrapper = styled.div`
    margin-top: 120px;
    width: 62%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        margin-top: 48px;
        width: 100%;
    }
`;

export const StyledLink = styled.a`
    font-weight: 900;
    margin-top: 24px;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondFont};
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 18px;
        line-height: 22px;
        margin-top: 12px;
    }

    &:hover {
        transition: color 0.5s;
        color: ${({ theme }) => theme.colors.mainBlue};
    }
`;

export const EncouragingText = styled.p`
    margin: 24px 0px 0px 0px;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.secondFont};

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        font-size: 14px;
        margin: 12px 0px 0px 0px;
    }
`;

export const SocialMediaWrapper = styled.div`
    margin: 56px 0px 0px 0px;
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        margin: 32px 0px 12px 0px;
    }
`;

export const SocialMediaLink = styled.a`
    margin-right: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        margin-right: 16px;
    }
`;

export const LinkedInIcon = styled(LinkedIn)`
    fill: ${({ theme }) => theme.colors.secondFont};
    
    &:hover{
        transition: 0.3s linear;
        fill: ${({ theme }) => theme.colors.mainBlue};
    }
    
    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        width: 32px;
        height: auto; 
    }
`;