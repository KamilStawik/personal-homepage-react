import styled from 'styled-components';
import { ReactComponent as Danger } from '../../../images/danger.svg';

const DangerIcon = styled(Danger)`
    stroke: ${({ theme }) => (theme.colors.secondFont)};
    margin-top: 96px;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobileMax)}px) {
        margin-top: 48px;
        margin-bottom: 24px;
    }
`;

export default DangerIcon;