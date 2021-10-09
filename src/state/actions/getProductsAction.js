import {
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAILED,
	SET_PRODUCT,
} from "../../constants/actionType";

export const getProducts = (payload) => ({
	type: GET_PRODUCTS,
	payload,
});

export const getProductsSuccess = (payload) => ({
	type: GET_PRODUCTS_SUCCESS,
	payload,
});

export const getProductsFailed = (payload) => ({
	type: GET_PRODUCTS_FAILED,
	payload,
});

export const setProduct = (payload) => ({
	type: SET_PRODUCT,
	payload,
});
