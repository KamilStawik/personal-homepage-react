import styled from 'styled-components';
import kamilStawik from './../../images/kamilStawik.jpg';

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
	margin-top: 66px;
`;

export const Header = styled.h1`
	font-weight: 900;
	font-size: 38px;
	margin: 12px 0px 0px 0px;
	letter-spacing: 0.05em;
	color: ${({ theme }) => (theme.colors.secondFont)};
`;

export const IntroductionText = styled.p`
	max-width: 85%;
	margin: 32px 0px;
	font-size: 20px;
	line-height: 1.4;
	letter-spacing: 0.05em;
	color: ${({ theme }) => (theme.colors.mainFont)};
`;
