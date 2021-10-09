import styled from 'styled-components';

const TopText = styled.span`
	margin-right: 12px;
	font-weight: bold;
	font-size: 12px;
	line-height: 1.3;
	text-transform: uppercase;
	color: ${({ theme }) => (theme.colors.slateGray)};
`;

export default TopText;