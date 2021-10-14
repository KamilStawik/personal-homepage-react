import styled from 'styled-components';

export const StyledButton = styled.button`
	grid-area: themeToggler;
	border: none;
	background-color: inherit;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	justify-self: flex-end;
`;

export const ThemeTogglerText = styled.span`
	margin-right: 12px;
	font-weight: bold;
	font-size: 12px;
	line-height: 1.3;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.mainFont};

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
		display: none;
    }
`;