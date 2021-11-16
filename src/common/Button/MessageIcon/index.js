import styled, { css } from 'styled-components';
import { ReactComponent as Message } from '../../../images/message.svg';

export const MessageIcon = styled(Message)`
        width: 24px;
        height: 25px;

        ${({ $gitButton }) => $gitButton && css`
            display: none;
        `}

    @media(max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        width: 20px;
        height: 21px;
    }
`;