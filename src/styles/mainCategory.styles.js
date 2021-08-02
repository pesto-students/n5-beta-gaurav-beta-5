import styled from "styled-components";

export const MainCategoryContainer = styled.div`
	width: 100%;
	margin: 20px 0;
	min-height: 50px;
	text-align: center;
	.elife-features {
		border-bottom: 1px solid #ddd;
	}
`;

export const MainCategoryCard = styled.div`
	width: 30%;
	margin: 20px 0;
	min-height: 684px;
	background-image: url(${(props) => props.image});
	background-repeat: no-repeat;
	background-size: cover;
	display: inline-block;
	margin: 0 20px;
    @media only screen and (max-width: 768px) {
        min-height: 300px;
        width: 100%;
        margin: 0;
    
    }
	.category-btn {
		margin: 130px auto;
	}
`;

export const CardTitle = styled.span`
	display: inline-block;
	width: 100%;
	margin: 20px 0;
	min-height: 50px;
	text-align: center;
	color: white;
	font-family: Futura-Bold;
	font-size: 36px;
	text-shadow: 1px 1px #595959;
	padding-top: 50%;
`;

export const FeatureDiv = styled.div`
	display: inline-block;
	width: 100%;
	margin: 50px 0 20px;
	min-height: 50px;
	text-align: left;
	color: black;
	position: relative;
	padding-left: 115px;
	.feature-icon-block {
		top: 0px;
		top: -19px;
		position: relative;
	}
`;

export const FeatureIconBlock = styled.div`
	display: inline-block;
	width: 10%;
`;

export const FeatureTextBlock = styled.div`
	display: inline-block;
	width: 80%;
`;

export const FeatureTitle = styled.span`
	display: inline-block;
	width: 80%;
	font-weight: bold;
	text-transform: uppercase;
	margin-bottom: 9px;
	font-size: 14px;
`;

export const FeatureSubtitle = styled.span`
	display: inline-block;
	width: 80%;
	font-size: 14px;
`;
