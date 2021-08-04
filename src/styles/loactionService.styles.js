import styled from "styled-components";
export const LocationServiceContainer = styled.div`
	display: inline-block;
	color: ${(props) => (props.isSmall ? "black" : "white")};
	.location-text {
	}
	.location-icon {
		position: relative;
		font-size: ${(props) => (props.isSmall ? "16px" : null)};
		left: ${(props) => (props.isSmall ? "-4px" : null)};
		top: ${(props) => (props.isSmall ? "2px" : null)};
	}
`;

export const ModalBody = styled.div`
	display: block;
	width: ${(props) => (props.isSmall ? "80%" : "30%")};
	min-height: 400px;
	background-color: #fff;
	margin: 0 auto;
	position: relative;
	top: 20%;
	border: none;
	color: black;
	border-radius: 0;
	.map-container {
		width: 100%;
		min-height: 400px;
		color: black;
	}
	.distance-text {
		text-align: center;
		padding: 10px;
		color: black;
	}
`;
