import {
	GET_ADDRESSES,
	GET_ADDRESSES_SUCCESS,
	GET_ADDRESSES_FAILED,
	ADD_ADDRESS,
	ADD_ADDRESS_SUCCESS,
	ADD_ADDRESS_FAILED,
	UPDATE_ADDRESS,
	UPDATE_ADDRESS_SUCCESS,
	UPDATE_ADDRESS_FAILED,
	DELETE_ADDRESS,
	DELETE_ADDRESS_FAILED,
	DELETE_ADDRESS_SUCCESS,
	SET_CURRENT_ADDRESS,
} from "../../constants/actionType";

export const getAddresses = (payload) => ({
	type: GET_ADDRESSES,
	payload,
});

export const getAddressesSuccess = (payload) => ({
	type: GET_ADDRESSES_SUCCESS,
	payload,
});

export const getAddressesFailed = (payload) => ({
	type: GET_ADDRESSES_FAILED,
	payload,
});

export const addAddress = (payload) => ({
	type: ADD_ADDRESS,
	payload,
});

export const addAddressSuccess = (payload) => ({
	type: ADD_ADDRESS_SUCCESS,
	payload,
});

export const addAddressFailed = (payload) => ({
	type: ADD_ADDRESS_FAILED,
	payload,
});

export const updateAddress = (payload) => ({
	type: UPDATE_ADDRESS,
	payload,
});

export const updateAddressSuccess = (payload) => ({
	type: UPDATE_ADDRESS_SUCCESS,
	payload,
});

export const updateAddressFailed = (payload) => ({
	type: UPDATE_ADDRESS_FAILED,
	payload,
});

export const deleteAddress = (payload) => ({
	type: DELETE_ADDRESS,
	payload,
});

export const deleteAddressSuccess = (payload) => ({
	type: DELETE_ADDRESS_SUCCESS,
	payload,
});

export const deleteAddressFailed = (payload) => ({
	type: DELETE_ADDRESS_FAILED,
	payload,
});

export const setCurrentAddress = (payload) => ({
	type: SET_CURRENT_ADDRESS,
	payload,
});
