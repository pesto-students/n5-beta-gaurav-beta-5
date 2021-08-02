import { all } from "redux-saga/effects";
import productsSaga from "./productSaga";

export default function* () {
	yield all([productsSaga()]);
}
