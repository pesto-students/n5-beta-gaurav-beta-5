import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Category from "../../categories/components/category";
import Home from "../../home/components/home";
import Products from "../../products/components/products";
import ProductDetails from "../../products/components/productDetails";
import Signin from "../../auth/components/signin";
import Signup from "../../auth/components/signup";
import ForgetPass from "../../auth/components/forgetPassword";
import Cart from "../../cart/components/cart";
import MakePayment from "../../payment/components/payment";
import Orders from "../../orders/components/orders";
import Thankyou from "../../thankyou/components/thankyou";

import ProductList from "../productList";
import AddressMgmt from "../../shared/components/addressMgmt";
import UserProfile from "../../shared/components/userProfile";
function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/categories" component={Category} />
			<Route exact path="/signin" component={Signin} />
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/cart" component={Cart} />
			<Route exact path="/orders" component={Orders} />
			<Route exact path="/thankyou" component={Thankyou} />

			<Route exact path="/makepayment" component={MakePayment} />
			<Route exact path="/forgetPass" component={ForgetPass} />
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
