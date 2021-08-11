import {
	takeEvery,
	takeLatest,
	all,
	call,
	put,
	takeLeading,
} from "redux-saga/effects";
import { SIGNIN, SET_PRODUCT } from "../../constants/actionType";

import { signIn, signInSuccess, signInFailed } from "../actions/authActions";
import { signInAPI } from "../../api/auth/signin";
import { signUpAPI } from "../../api/auth/signup";
import { userMeApi } from "../../api/auth/userme";

function* signInSaga(payload) {
	try {
		const data = yield call(signInAPI, payload);
		console.log("signIn", data);
		localStorage.setItem("session", JSON.stringify(data));
		yield put(signInSuccess(data));
	} catch (error) {
		yield put(signInFailed(error.message));
	}
}

function* signInWatcher() {
	yield takeLatest(SIGNIN, signInSaga);
}

export default function* signInRootSaga() {
	yield all([signInWatcher()]);
}
