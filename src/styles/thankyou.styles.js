import styled from "styled-components";

export const ThankYouContainer = styled.div`
	#main {
		display: none;
	}
	.main {
		font-family: Futura-Light;
		background: #f7f7f7;
		text-align: center;
		span {
			font-size: 24px;
		}
	}
	.container {
		padding: 20px;
		margin: 30px auto 100px auto;
	}
	.submit-change {
		font-family: Futura-Light;
		background-color: #ffd814;
		display: inline-block;
		font-size: 13px;
		padding: 10px;
		border: none;
		width: 100%;
		cursor: pointer;
		color: #263238;
		margin-top: 1rem;
		margin-bottom: 5pm;
		&:hover {
			background-color: #f8dc4d;
		}
	}
	.customBold {
		font-weight: 800;
	}
	.error {
		color: red;
	}
	.hidden {
		display: none;
	}
	.show {
		display: block;
	}
`;
