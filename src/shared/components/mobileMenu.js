import React from "react";
import {
	MobileMenuAvatar,
	MobileMenuBackDrop,
	MobileMenuContainer,
	MobileMenuList,
} from "../../styles/mobileMenu.styles";
import { useHistory } from "react-router-dom";
import { AccountCircle, ExitToApp } from "@material-ui/icons";
import { bindActionCreators } from "redux";
import { authActions } from "../../state";
import { useSelector, useDispatch } from "react-redux";
function MobileMenu({ showMenu, closeMenu }) {
	const history = useHistory();
	const dispatch = useDispatch();
	const { clearSession } = bindActionCreators(authActions, dispatch);

	const { session } = useSelector((state) => state.auth);
	const handleRoute = (route) => {
		history.push(route);
		closeMenu();
	};

	const handleLogout = () => {
		clearSession();

		closeMenu();
	};

	return (
		<>
			<MobileMenuContainer showMenu={showMenu}>
				<MobileMenuAvatar onClick={() => handleRoute("/user-profile")}>
					<AccountCircle className="avatar-icon" />
					{session !== null && `Hello ${session.name}`}
				</MobileMenuAvatar>
				<MobileMenuList>
					<ul>
						<li onClick={() => handleRoute("/")}>Home</li>
						<li onClick={() => handleRoute("/categories")}>
							Categories
						</li>
						<li onClick={() => handleRoute("/orders")}>Orders</li>
						{session !== null && (
							<li
								onClick={() => handleLogout()}
								className="logout"
							>
								<ExitToApp className="logout-icon" />
								Logout
							</li>
						)}
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
