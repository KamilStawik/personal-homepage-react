import styled from 'styled-components';

const Container = styled.main`
	max-width: 1216px;
    margin: 66px auto;

    // add new media query breakpoint
    @media (max-width: 1240px) {
        margin: 66px 32px;
    }

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobileMax)}px) {
        margin: 16px;
    }
`;

export default Container;
