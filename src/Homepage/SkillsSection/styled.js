import styled, { css } from 'styled-components';
import { ReactComponent as Icone } from '../../images/listBullet.svg';

export const ListBullet = styled(Icone)`
    fill: ${({ theme }) => theme.colors.mainBlue};
	width: 9px;
    height: 9px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
        width: 6px;
        height: 6px;
    }
`;

export const Wrapper = styled.section`
	padding: 32px;
	margin: 66px auto;
	background-color: ${({ theme }) => theme.colors.tileBackground};
	box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.04), 0px 16px 58px rgba(9, 10, 51, 0.06);
	border-radius: 4px;

	@media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
		padding: 16px;
		margin: 48px auto;
    }
`;

export const UnorderedList = styled.ul`
	list-style-type: none;
	padding: 0px;
	margin: 0px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	@media (max-width: 1240px) {
		grid-template-columns: 1fr 1fr;
		padding-left: 0px;
    }
	
	@media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
		grid-template-columns: 1fr;
		padding-left: 0px;
    }
`;

export const ListItem = styled.li`
	line-height: 1.4;
	margin: 4px 0px;
`;

export const ListItemText = styled.span`
	margin-left: 12px;
	font-size: 18px;
	letter-spacing: 0.05em;
	color: ${({ theme }) => theme.colors.mainFont};

	${({ important }) => important && css`
		font-weight: bold;
    `}

	@media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
		font-size: 14px;
    }
`;