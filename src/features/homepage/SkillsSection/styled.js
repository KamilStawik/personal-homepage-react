import styled from 'styled-components';
import listBullet from '../../../images/listBullet.svg';

export const Wrapper = styled.section`
	max-width: 1216px;
	padding: 32px;
	margin: 66px auto;
	box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.04), 0px 16px 58px rgba(9, 10, 51, 0.06);
	border-radius: 4px;
`;

export const UnorderedList = styled.ul`
	padding-left: 20px;
	display: flex;
	flex-wrap: wrap;
`;

export const ListItem = styled.li`
	list-style-image: url(${listBullet});
	line-height: 1.4;
	margin: 4px 0px;
	flex-basis: 33%;
`;

export const ListItemText = styled.span`
	margin-left: 12px;
	letter-spacing: 0.05em;
	color: ${({ theme }) => (theme.colors.slateGray)};
`;