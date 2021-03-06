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
import { Container, Hidden, Tooltip, Box } from "@material-ui/core";
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
	const { cart } = useSelector((state) => state.myCart);
	const { isMapView } = useSelector((state) => state.map);

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
		setUserSession(null);
	};

	return (
		<MainMenuContainer isSmall={isSmall} isMapView={isMapView}>
			<Container>
				<Logo onClick={() => handleClick("/")} isSmall={isSmall}>
					E-Life.
				</Logo>

				<IconsMenuDiv isSmall={isSmall}>
					<Hidden smDown>
						<Menu>
							<MenuItem
								id="home-link"
								onClick={() => handleClick("/")}
							>
								Home
							</MenuItem>
							<MenuItem
								id="categories-link"
								onClick={() => handleClick("/categories")}
							>
								Categories
							</MenuItem>
							<MenuItem
								id="orders-link"
								onClick={() => handleClick("/orders")}
							>
								Orders
							</MenuItem>
						</Menu>
					</Hidden>
					<Hidden smDown>
						<Tooltip title="User Profile">
							<IconMenuItem
								id="user-profile"
								onClick={() => handleUserIconClick()}
							>
								<PersonOutlined />
								<IconMenuText>
									{session && session !== null
										? session.name
										: ""}
								</IconMenuText>
							</IconMenuItem>
						</Tooltip>
					</Hidden>
					<Hidden smUp>
						<LocationService isSmall={isSmall} />
					</Hidden>
					<IconMenuItem
						id="cart-icon"
						onClick={() => handleClick("/cart")}
					>
						<Tooltip title="Shopping Cart">
							<Box className="cart-icon">
								<ShoppingCartOutlined id="cart-link" />
								{cart && cart.length > 0 && (
									<div className="cart-count">
										{cart.reduce(
											(acc, item) => acc + item.qty,
											0
										)}
									</div>
								)}
							</Box>
						</Tooltip>
					</IconMenuItem>
					{/* {session !== null && (
						<IconMenuItem>
							<Tooltip title="Log Out">
								<ExitToAppOutlined
									title="Logout"
									onClick={() => logout()}
								/>
							</Tooltip>
						</IconMenuItem>
					)} */}
				</IconsMenuDiv>
			</Container>
		</MainMenuContainer>
	);
}

export default MainMenu;
