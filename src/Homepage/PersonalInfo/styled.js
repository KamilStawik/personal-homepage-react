import styled from 'styled-components';
import kamilStawik from './../../images/kamilStawik.jpg';

export const Wrapper = styled.div`
  	display: grid;
	grid-gap: 66px;
	grid-template-rows: 32px 1fr;
	grid-template-areas: 
		"photo themeToggler"
		"photo personalInfo"
	;

	@media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
		grid-gap: 12px;
		grid-template-rows: auto;
		grid-template-areas: 
			"photo themeToggler"
			"personalInfo personalInfo"
		;
    }
`;

export const Photo = styled.div`
	grid-area: photo;
	background-image: url(${kamilStawik});
	background-size: cover;
	height: 400px;
	width: 400px;
	border-radius: 50%;

	@media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
		height: 132px;
		width: 132px;
    }
`;

export const InfoContainer = styled.div`
	grid-area: personalInfo;
	display: flex;
	flex-direction: column;
	
`;

export const Header = styled.h1`
	font-weight: 900;
	font-size: 38px;
	margin: 12px 0px 0px 0px;
	letter-spacing: 0.05em;
	color: ${({ theme }) => theme.colors.secondFont};

	@media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
		font-size: 22px;
    }
`;

export const IntroductionText = styled.p`
	max-width: 85%;
	margin: 32px 0px;
	font-size: 20px;
	line-height: 1.4;
	letter-spacing: 0.05em;
	color: ${({ theme }) => theme.colors.mainFont};

	@media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
		max-width: 100%;
		margin: 16px 0px;
		font-size: 17px;
    }
`;