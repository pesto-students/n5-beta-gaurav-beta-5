import {
	GET_CATEGORIES,
	GET_CATEGORIES_SUCCESS,
	GET_CATEGORIES_FAILED,
	GET_SUB_CATEGORIES,
	GET_SUB_CATEGORIES_SUCCESS,
	GET_SUB_CATEGORIES_FAILED,
} from "../../constants/actionType";

export const getCategories = (payload) => ({
	type: GET_CATEGORIES,
	payload,
});

export const getCategoriesSuccess = (payload) => ({
	type: GET_CATEGORIES_SUCCESS,
	payload,
});

export const getCategoriesFailed = (payload) => ({
	type: GET_CATEGORIES_FAILED,
	payload,
});

export const getSubCategories = (payload) => ({
	type: GET_SUB_CATEGORIES,
	payload,
});

export const getSubCategoriesSuccess = (payload) => ({
	type: GET_SUB_CATEGORIES_SUCCESS,
	payload,
});

export const getSubCategoriesFailed = (payload) => ({
	type: GET_SUB_CATEGORIES_FAILED,
	payload,
});
