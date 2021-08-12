import {
	takeEvery,
	takeLatest,
	all,
	call,
	put,
	takeLeading,
} from "redux-saga/effects";
import { GET_SUB_CATEGORIES } from "../../constants/actionType";

import {
	getSubCategoriesSuccess,
	getSubCategoriesFailed,
} from "../actions/categoriesAction";
import { getSubCategoriesApi } from "../../api/categories/getSubCategoriesApi";

function* getSubCategoriesSaga(payload) {
	try {
		const data = yield call(getSubCategoriesApi, payload);
		console.log("getSubCategories", data);

		yield put(getSubCategoriesSuccess(data));
	} catch (error) {
		yield put(getSubCategoriesFailed(error.message));
	}
}

function* getSubCategoriesWatcher() {
	yield takeLatest(GET_SUB_CATEGORIES, getSubCategoriesSaga);
}

export default function* getSubCategoriesRootSaga() {
	yield all([getSubCategoriesWatcher()]);
}
