import {
	ADD_TO_CART,
	ADD_TO_CART_SUCCESS,
	ADD_TO_CART_FAILED,
	UPDATE_TO_CART_SUCCESS,
	DELETE_TO_CART,
	DELETE_TO_CART_SUCCESS,
	ADD_SHIPPING_CHARGE,
} from "../../constants/actionType";

export const addToCart = (payload) => ({
	type: ADD_TO_CART,
	payload,
});

export const deleteToCart = (payload) => ({
	type: DELETE_TO_CART,
	payload,
});

export const addToCartSuccess = (payload) => ({
	type: ADD_TO_CART_SUCCESS,
	payload,
});

export const updateToCartSuccess = (payload) => ({
	type: UPDATE_TO_CART_SUCCESS,
	payload,
});

export const deleteToCartSuccess = (payload) => ({
	type: DELETE_TO_CART_SUCCESS,
	payload,
});

export const addToCartFailed = (payload) => ({
	type: ADD_TO_CART_FAILED,
	payload,
});

export const addShippingCharge = (payload) => ({
	type: ADD_SHIPPING_CHARGE,
	payload,
});
