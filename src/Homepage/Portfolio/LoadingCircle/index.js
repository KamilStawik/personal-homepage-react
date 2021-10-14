import styled from 'styled-components';
import { ReactComponent as EllipseIcon } from '../../../images/ellipse.svg';

const LoadingCircle = styled(EllipseIcon)`
    width: 160px;
    height: 160px;
    margin-bottom: 60px;
    animation:spin 2s linear infinite;

    @keyframes spin { 100% {transform:rotate(360deg);} };
    
    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        width: 80px;
        height: 80px;
        margin-bottom: 20px;
    }
`;

export default LoadingCircle;
