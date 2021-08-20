import {
	GET_CATEGORIES,
	GET_CATEGORIES_SUCCESS,
	GET_CATEGORIES_FAILED,
	GET_SUB_CATEGORIES,
	GET_SUB_CATEGORIES_SUCCESS,
	GET_SUB_CATEGORIES_FAILED,
} from "../../constants/actionType";

let initialState = {
	isLoading: false,
	categories: [],
	subCategories: [],
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORIES:
			return { ...state, isLoading: true };
			break;
		case GET_CATEGORIES_SUCCESS:
			return { ...state, categories: action.payload, isLoading: false };
			break;
		case GET_CATEGORIES_FAILED:
			return { ...state, error: action.payload, isLoading: false };
			break;
		case GET_SUB_CATEGORIES:
			return { ...state, isLoading: true };
			break;
		case GET_SUB_CATEGORIES_SUCCESS:
			return {
				...state,
				subCategories: action.payload,
				isLoading: false,
			};
			break;
		case GET_SUB_CATEGORIES_FAILED:
			return { ...state, error: action.payload, isLoading: false };
			break;
		default:
			return state;
			break;
	}
};

export default reducer;
