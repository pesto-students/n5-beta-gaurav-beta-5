import React from "react";
import {
	MobileMenuAvatar,
	MobileMenuBackDrop,
	MobileMenuContainer,
	MobileMenuList,
} from "../../styles/mobileMenu.styles";
import { useHistory } from "react-router-dom";
import { AccountCircle, ExitToApp } from "@material-ui/icons";

function MobileMenu({ showMenu, closeMenu }) {
	const history = useHistory();

	const handleRoute = (route) => {
		history.push(route);
		closeMenu();
	};

	const handleLogout = () => {
		history.push("/logout");
		closeMenu();
	};

	return (
		<>
			<MobileMenuContainer showMenu={showMenu}>
				<MobileMenuAvatar onClick={() => handleRoute("/user-profile")}>
					<AccountCircle className="avatar-icon" />
					Hello Omkar
				</MobileMenuAvatar>
				<MobileMenuList>
					<ul>
						<li onClick={() => handleRoute("/")}>Home</li>
						<li onClick={() => handleRoute("/categories")}>
							Categories
						</li>
						<li onClick={() => handleRoute("/orders")}>Orders</li>
						<li onClick={() => handleLogout()} className="logout">
							<ExitToApp className="logout-icon" />
							Logout
						</li>
					</ul>
				</MobileMenuList>
			</MobileMenuContainer>
			<MobileMenuBackDrop
				showMenu={showMenu}
				onClick={() => closeMenu()}
			/>
		</>
	);
}

export default MobileMenu;
