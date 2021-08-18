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
import LocationService from "./locationService";
import MobileMenu from "./mobileMenu";
import { searchProductsApi } from "../../api/products/searchProductsApi";
import { productsAction } from "../../state";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";

function SearchBar(props) {
	const [showMenu, setShowMenu] = useState(false);
	const history = useHistory();
	const [searchResult, setSearchResult] = useState([]);
	const [showSearchResult, setShowSearchResult] = useState(false);
	const dispatch = useDispatch();
	const { setProduct } = bindActionCreators(productsAction, dispatch);
	const closeMenu = () => {
		setShowMenu(false);
	};
	const search = (e) => {
		let body = { query: e.target.value };
		searchProductsApi(body).then((data) => {
			console.log("searched", data.result);
			setSearchResult(data.result);
		});
	};

	const setProductState = (product) => {
		console.log(product);

		setProduct(product);
		setShowSearchResult(false);
		history.push(
			`/categories/products/product-details?productId=${product.objectId}`
		);
		document.getElementById("search-bar").value = "";
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
					<SearchInput
						id="search-bar"
						onFocus={() => setShowSearchResult(true)}
						onBlur={() =>
							setTimeout(() => setShowSearchResult(), 200)
						}
						onChange={(e) => search(e)}
					/>
					<SearchOutlined className="search-icon" />
					{showSearchResult && (
						<ul className="search-result">
							{searchResult.length > 0 &&
								searchResult.map((product) => (
									<li
										onClick={() => setProductState(product)}
									>
										{product.name}
									</li>
								))}
						</ul>
					)}
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
