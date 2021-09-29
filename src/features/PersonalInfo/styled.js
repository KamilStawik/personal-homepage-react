import styled from "styled-components";
import kamilStawik from "../../images/kamilStawik.jpg"

export const Wrapper = styled.div`
  	display: flex;
`;

export const Photo = styled.div`
	background-image: url(${kamilStawik});
	background-size: cover;
	height: 400px;
	width: 400px;
	border-radius: 50%;
	flex-shrink:0;
`;

export const InfoContainer = styled.div`
	margin-left: 66px;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const TopSpan = styled.span`
	font-weight: bold;
	font-size: 12px;
	line-height: 1.3;
	text-transform: uppercase;
	color: ${({ theme }) => (theme.colors.slateGray)};
`;

export const Header = styled.h1`
	font-weight: 900;
	font-size: 38px;
	margin: 0px;
	letter-spacing: 0.05em;
	color: ${({ theme }) => (theme.colors.mineShaft)};
`;

export const IntroductionSpan = styled.span`
	max-width: 633px;
	font-size: 20px;
	line-height: 1.4;
	letter-spacing: 0.05em;
	color: ${({ theme }) => (theme.colors.slateGray)};
`;
