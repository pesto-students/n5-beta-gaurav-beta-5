import React, { useEffect, useState } from "react";
import {
	Logo,
	MainMenuContainer,
	Menu,
	MenuItem,
	IconsMenuDiv,
	IconMenuItem,
	IconMenuText,
} from "../../styles/mainMenu.styles";
import { Container, Hidden, Tooltip } from "@material-ui/core";
import {
	ShoppingCartOutlined,
	PersonOutlined,
	ExitToAppOutlined,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { bindActionCreators } from "redux";
import { authActions } from "../../state";
import LocationService from "./locationService";
import { useSelector, useDispatch } from "react-redux";
function MainMenu() {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
	};
	const dispatch = useDispatch();
	const { clearSession } = bindActionCreators(authActions, dispatch);
	const [userSession, setUserSession] = useState();
	const { session } = useSelector((state) => state.auth);

	useEffect(() => {
		if (
			session !== null &&
			session !== undefined &&
			session.sessionToken != null &&
			session.sessionToken.length > 0
		) {
			setUserSession(session);
		}
	}, [session]);

	const handleUserIconClick = () => {
		if (session) {
			history.push("/user-profile");
		} else {
			history.push("/signin");
		}
	};

	const logout = () => {
		clearSession();
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
							Categories
						</MenuItem>
						<MenuItem onClick={() => handleClick("/orders")}>
							Orders
						</MenuItem>
					</Menu>
				</Hidden>

				<IconsMenuDiv isSmall={isSmall}>
					<Hidden smDown>
						<Tooltip title="User Profile">
							<IconMenuItem onClick={() => handleUserIconClick()}>
								<PersonOutlined />
								<IconMenuText>
									{userSession ? userSession.name : ""}
								</IconMenuText>
							</IconMenuItem>
						</Tooltip>
					</Hidden>
					<Hidden smUp>
						<LocationService isSmall={isSmall} />
					</Hidden>
					<IconMenuItem>
						<Tooltip title="Shopping Cart">
							<ShoppingCartOutlined
								onClick={() => handleClick("/cart")}
							/>
						</Tooltip>
					</IconMenuItem>
					{session !== null && (
						<IconMenuItem>
							<Tooltip title="Log Out">
								<ExitToAppOutlined
									title="Logout"
									onClick={() => logout()}
								/>
							</Tooltip>
						</IconMenuItem>
					)}
				</IconsMenuDiv>
			</Container>
		</MainMenuContainer>
	);
}

export default MainMenu;
