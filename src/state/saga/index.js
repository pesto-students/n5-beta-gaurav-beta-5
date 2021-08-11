import { all } from "redux-saga/effects";
import productsSaga from "./productSaga";
import signInRootSaga from "./signinSaga";
import signUpRootSaga from "./signUpSaga";

export default function* () {
	yield all([productsSaga(), signInRootSaga(), signUpRootSaga()]);
}
