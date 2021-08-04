import React, { useState } from "react";
import {
	HamburgerMenu,
	SearchBarDiv,
	SearchBox,
	SearchByLocation,
	SearchInput,
} from "../../styles/serachBar.styles";
import { Container, Hidden } from "@material-ui/core";
import { SearchOutlined, Menu } from "@material-ui/icons";
import { geolocated } from "react-geolocated";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import LocationService from "./locationService";
import MobileMenu from "./mobileMenu";

mapboxgl.accessToken =
	"pk.eyJ1Ijoib21rYXJrYW1hbGUwMDEiLCJhIjoiY2tydGlsN3YzMWdqajJ1cGZ0b3BrYTJrMSJ9.VzUJw-oFBbvvyZ-XmuOWyA";

function SearchBar(props) {
	const [showMenu, setShowMenu] = useState(false);
	const closeMenu = () => {
		setShowMenu(false);
	};
	return (
		<SearchBarDiv>
			<Container>
				<Hidden smDown>
					<SearchByLocation>
						<LocationService {...props} />
					</SearchByLocation>
				</Hidden>
				<Hidden smUp>
					<HamburgerMenu onClick={() => setShowMenu(!showMenu)}>
						<Menu className="menu" />
					</HamburgerMenu>
					<MobileMenu showMenu={showMenu} closeMenu={closeMenu} />
				</Hidden>
				<SearchBox>
					<SearchInput />
					<SearchOutlined className="search-icon" />
				</SearchBox>
			</Container>
		</SearchBarDiv>
	);
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: true,
	},
	userDecisionTimeout: 5000,
})(SearchBar);
