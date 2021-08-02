import styled from "styled-components";

export const Loader = styled.div`
	margin-top: 0px;
	position: fixed;
	width: 100vw;
	height: 100%;
	display: flex;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
	display: ${(props) => (props.show ? null : "none")};
	top: 0;
	left: 0;
	justify-content: center;
	.sr-only {
		display: none;
	}
`;
