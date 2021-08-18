import {
	SIGNIN,
	SIGNIN_SUCCESS,
	SIGNIN_FAILED,
	SIGNUP,
	SIGNUP_SUCCESS,
	SIGNUP_FAILED,
	CLEAR_SESSION,
	RESET_PASSWORD,
	RESET_PASSWORD_SUCCESS,
	RESET_PASSWORD_FAILED,
	UPDATE_USER_INFO,
	UPDATE_USER_INFO_SUCCESS,
	UPDATE_USER_INFO_FAILED,
} from "../../constants/actionType";

let initialState = {
	isLoading: false,
	session:
		localStorage.getItem("session") !== null
			? JSON.parse(localStorage.getItem("session"))
			: null,
	signUpSession:
		localStorage.getItem("signUpSession") !== null
			? JSON.parse(localStorage.getItem("signUpSession"))
			: null,
	resetPasswordState: null,
	userUpdated: null,
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGNIN:
			return { ...state, isLoading: true };
			break;
		case SIGNIN_SUCCESS:
			return { ...state, session: action.payload, isLoading: false };
			break;
		case SIGNIN_FAILED:
			return { ...state, error: action.payload, isLoading: false };
			break;
		case SIGNUP:
			return { ...state, isLoading: true };
			break;
		case SIGNUP_SUCCESS:
			return {
				...state,
				signUpSession: action.payload,
				isLoading: false,
			};
			break;
		case SIGNUP_FAILED:
			return { ...state, error: action.payload, isLoading: false };
			break;
		case RESET_PASSWORD:
			return { ...state, isLoading: true };
			break;
		case RESET_PASSWORD_SUCCESS:
			return {
				...state,
				resetPasswordState: action.payload,
				isLoading: false,
			};
			break;
		case RESET_PASSWORD_FAILED:
			return { ...state, error: action.payload, isLoading: false };
			break;
		case UPDATE_USER_INFO:
			return { ...state, isLoading: true };
			break;
		case UPDATE_USER_INFO_SUCCESS:
			return {
				...state,
				userUpdated: action.payload,
				isLoading: false,
			};
			break;
		case UPDATE_USER_INFO_FAILED:
			return { ...state, error: action.payload, isLoading: false };
			break;
		case CLEAR_SESSION:
			localStorage.clear();
			return {
				...state,
				session: null,
				signUpSession: null,
				isLoading: false,
			};
			break;
		default:
			return state;
			break;
	}
};

export default reducer;
