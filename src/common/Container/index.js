import styled from 'styled-components';

const Container = styled.main`
	max-width: 1216px;
    margin: 66px auto;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobileMax)}px) {
        margin: 16px;
    }
`;

export default Container;