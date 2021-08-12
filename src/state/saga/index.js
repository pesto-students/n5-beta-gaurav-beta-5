import { all } from "redux-saga/effects";
//import productsSaga from "./productSaga";
import signInRootSaga from "./signinSaga";
import signUpRootSaga from "./signUpSaga";
import resetPasswordRootSaga from "./resetPasswordSaga";
import updateUserInfoRootSaga from "./updateUserInfoSaga";
import getCategoriesRootSaga from "./getCategoriesSaga";
import getSubCategoriesRootSaga from "./getSubCategoriesSaga";
import getProductsRootSaga from "./getProductsSaga";

export default function* () {
	yield all([
		signInRootSaga(),
		signUpRootSaga(),
		resetPasswordRootSaga(),
		updateUserInfoRootSaga(),
		getCategoriesRootSaga(),
		getSubCategoriesRootSaga(),
		getProductsRootSaga(),
	]);
}
