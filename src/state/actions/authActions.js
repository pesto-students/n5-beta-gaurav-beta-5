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
} from "../../constants/actionType";

export const signIn = (payload) => ({
	type: SIGNIN,
	payload,
});

export const signInSuccess = (payload) => ({
	type: SIGNIN_SUCCESS,
	payload,
});

export const signInFailed = (payload) => ({
	type: SIGNIN_FAILED,
	payload,
});

export const signUp = (payload) => ({
	type: SIGNUP,
	payload,
});

export const signUpSuccess = (payload) => ({
	type: SIGNUP_SUCCESS,
	payload,
});

export const signUpFailed = (payload) => ({
	type: SIGNUP_FAILED,
	payload,
});

export const resetPassword = (payload) => ({
	type: RESET_PASSWORD,
	payload,
});

export const resetPasswordSuccess = (payload) => ({
	type: RESET_PASSWORD_SUCCESS,
	payload,
});

export const resetPasswordFailed = (payload) => ({
	type: RESET_PASSWORD_FAILED,
	payload,
});

export const clearSession = () => ({
	type: CLEAR_SESSION,
});
