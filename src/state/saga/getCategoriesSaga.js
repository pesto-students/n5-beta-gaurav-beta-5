import {
	takeEvery,
	takeLatest,
	all,
	call,
	put,
	takeLeading,
} from "redux-saga/effects";
import { GET_CATEGORIES } from "../../constants/actionType";

import {
	getCategoriesSuccess,
	getCategoriesFailed,
} from "../actions/categoriesAction";
import { getCategoriesApi } from "../../api/categories/getCategoriesApi";

function* getCategoriesSaga(payload) {
	try {
		const data = yield call(getCategoriesApi, payload);
		console.log("getCategories", data);

		yield put(getCategoriesSuccess(data));
	} catch (error) {
		yield put(getCategoriesFailed(error.message));
	}
}

function* getCategoriesWatcher() {
	yield takeLatest(GET_CATEGORIES, getCategoriesSaga);
}

export default function* getCategoriesRootSaga() {
	yield all([getCategoriesWatcher()]);
}
