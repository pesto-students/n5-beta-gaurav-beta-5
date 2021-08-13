import {
	ADD_TO_CART,
	ADD_TO_CART_SUCCESS,
	ADD_TO_CART_FAILED,
} from "../../constants/actionType";

export const addToCart = (payload) => ({
	type: ADD_TO_CART,
	payload,
});

export const addToCartSuccess = (payload) => ({
	type: ADD_TO_CART_SUCCESS,
	payload,
});

export const addToCartFailed = (payload) => ({
	type: ADD_TO_CART_FAILED,
	payload,
});
