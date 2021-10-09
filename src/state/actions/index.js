// import { depositMoneyAction } from "./depositAction";
// import { withdrawMoneyAction } from "./withdrawAction";

// export const depositMoney = depositMoneyAction;
// export const withdrawMoney = withdrawMoneyAction;

import {
	GET_PRODUCT_LIST,
	GET_PRODUCT_LIST_SUCCESS,
	GET_PRODUCT_LIST_FAILED,
	SET_PRODUCT,
} from "../../constants";

export const getProductList = (payload) => ({
	type: GET_PRODUCT_LIST,
	payload,
});

export const getProductListSuccess = (payload) => ({
	type: GET_PRODUCT_LIST_SUCCESS,
	payload,
});

export const getProductListFailed = (payload) => ({
	type: GET_PRODUCT_LIST_FAILED,
	payload,
});

export const setProduct = (payload) => ({
	type: SET_PRODUCT,
	payload,
});
