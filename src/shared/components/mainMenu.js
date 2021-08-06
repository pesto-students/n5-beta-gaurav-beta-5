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
import { Container, Hidden } from "@material-ui/core";
import { ShoppingCartOutlined, PersonOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LocationService from "./locationService";
function MainMenu() {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
	};
	return (
		<MainMenuContainer isSmall={isSmall}>
			<Container>
				<Logo onClick={() => handleClick("/")} isSmall={isSmall}>
					E-Life.
				</Logo>
				<Hidden smDown>
					<Menu>
						<MenuItem onClick={() => handleClick("/")}>
							Home
						</MenuItem>
						<MenuItem onClick={() => handleClick("/categories")}>
							Catagories
						</MenuItem>
						<MenuItem onClick={() => handleClick("/orders")}>
							Orders
						</MenuItem>
					</Menu>
				</Hidden>

				<IconsMenuDiv isSmall={isSmall}>
					<Hidden smDown>
						<IconMenuItem onClick={() => handleClick("/signin")}>
							<PersonOutlined />
							<IconMenuText>Hello Omkar</IconMenuText>
						</IconMenuItem>
					</Hidden>
					<Hidden smUp>
						<LocationService isSmall={isSmall} />
					</Hidden>
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
