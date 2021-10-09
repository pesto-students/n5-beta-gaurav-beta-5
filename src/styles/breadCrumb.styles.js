import styled from "styled-components";

export const BreadCrumbContainer = styled.div`
	ul {
		margin: 0%;
		padding: 0;
		margin-top: 10px;
		li {
			list-style: none;
			display: inline-block;
			font-family: inherit;
			text-decoration: none;
			margin-right: 6px;
			a {
				text-decoration: none;
				color: #333;
				text-transform: capitalize;
				.icon {
					position: relative;
					font-size: 20px;
					top: 5px;
					color: gray;
					display: inline-block;
					line-height: 1px;
				}
				:hover {
					color: #000;
					text-decoration: underline;
				}
			}
		}
	}
`;
