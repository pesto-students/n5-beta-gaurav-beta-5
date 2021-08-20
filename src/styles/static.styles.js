import styled from "styled-components";

export const Static = styled.div`
	margin: 20px 0;
	.paper {
		border-radius: 0%;
		padding: 20px;
		margin-bottom: 15px;
		h1 {
			padding: 20px 0;
		}
		&.not-found {
			a {
				cursor: pointer;
				text-decoration: none;
				padding: 10px;
				background-color: #f7ca00;
				color: black;
			}
			min-height: 300px;
		}
	}
	.heading {
		border-bottom: 1px solid #ddd;
		padding-bottom: 15px;
		margin-bottom: 10px;
	}
	ul {
		padding: 0;
		margin: 0;
		margin-left: 25px;
		li {
			padding: 5px 0;
		}
	}
	p {
		padding: 10px 0;
	}
`;
