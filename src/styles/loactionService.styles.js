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
		color: white;
	}
	.modal-body-div {
		background-color: black;
		color: white;
	}
	.search-location {
		text-align: center;
		display: inline-block;
		width: 100%;
		margin-bottom: 30px;
		position: relative;
		input {
			padding: 10px;
			font-family: inherit;
			width: 80%;
			:focus-visible {
				outline: none;
			}
		}
		.search-results {
			position: absolute;
			top: 40px;
			left: 57px;
			width: 80%;
			margin: 0 auto;
			ul {
				padding: 0;
				margin: 0;
				overflow-y: scroll;
				max-height: 100px;
				background-color: white;
				color: black;
				text-align: left;
				li {
					list-style: none;
					display: inline-block;
					width: 100%;
					padding: 15px;
					cursor: pointer;
					border-bottom: 1px solid #ddd;
					:hover {
						background-color: #ddd;
					}
				}
			}
		}
	}
`;
