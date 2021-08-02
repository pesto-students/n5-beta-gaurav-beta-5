import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Category from "../../categories/components/category";
import Home from "../../home/components/home";
import Products from "../../products/components/products";
import ProductDetails from "../../products/components/productDetails";

import ProductList from "../productList";
import AddressMgmt from "../../shared/components/addressMgmt";
import UserProfile from "../../shared/components/userProfile";
function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/categories" component={Category} />
			<Route exact path="/categories/products" component={Products} />
			<Route
				path="/categories/products/product-details"
				component={ProductDetails}
			/>
			<Route path="/address-management" component={AddressMgmt} />
			<Route path="/user-profile" component={UserProfile} />
		</Switch>
	);
}

export default Routes;
