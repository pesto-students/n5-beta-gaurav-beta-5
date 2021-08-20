import { IS_GLOBAL } from "../../constants/actionType";

let initialState = {
	isLoading: false,
	isGlobal: true,
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case IS_GLOBAL:
			return { ...state, isGlobal: action.payload, isLoading: false };
			break;

		default:
			return state;
			break;
	}
};

export default reducer;
