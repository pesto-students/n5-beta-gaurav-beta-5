import React from "react";
import {
	Logo,
	MainMenuContainer,
	Menu,
	MenuItem,
	IconsMenuDiv,
	IconMenuItem,
	IconMenuText,
} from "../../styles/mainMenu.styles";
import Container from "@material-ui/core/Container";
import { ShoppingCartOutlined, PersonOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
// import logImg from "../../assets/images/E-Life_logo.png";
function MainMenu() {
	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
	};
	return (
		<MainMenuContainer>
			<Container>
				<Logo onClick={() => handleClick("/")}>
					{/* <img src={logImg} /> */}
					E-Life
				</Logo>

				<Menu>
					<MenuItem onClick={() => handleClick("/")}>Home</MenuItem>
					<MenuItem onClick={() => handleClick("/categories")}>
						Catagories
					</MenuItem>
					<MenuItem onClick={() => handleClick("/orders")}>
						Orders
					</MenuItem>
				</Menu>
				<IconsMenuDiv>
					<IconMenuItem>
						<PersonOutlined
							onClick={() => handleClick("/signin")}
						/>
						<IconMenuText>Hello Omkar</IconMenuText>
					</IconMenuItem>
					<IconMenuItem>
						<ShoppingCartOutlined
							onClick={() => handleClick("/cart")}
						/>
					</IconMenuItem>
				</IconsMenuDiv>
			</Container>
		</MainMenuContainer>
	);
}

export default MainMenu;
