import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 120px;
    width: 60%;
    display: flex;
    flex-direction: column;
`;

export const StyledMail = styled.a`
    font-weight: 900;
    margin: 24px 0px;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    text-decoration: none;
    color: ${({ theme }) => (theme.colors.mineShaft)};
`;

export const EncouragingText = styled.p`
    margin: 0px;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => (theme.colors.mineShaft)};
`;

export const SocialMediaWrapper = styled.div`
    margin: 56px 0px;
    display: flex;
`;