import { takeLatest, all, call, put } from "redux-saga/effects";
import { LOCATION_SEARCH } from "../../constants/actionType";

import {
	locationSearchSuccess,
	locationSearchFailed,
} from "../actions/locationSearchAction";
import { searchLocationApi } from "../../api/location/locationSearchApi";

function* locationSearchSaga(payload) {
	try {
		const data = yield call(searchLocationApi, payload);
		console.log("location searched", data);
		localStorage.setItem("session", JSON.stringify(data));
		yield put(locationSearchSuccess(data));
	} catch (error) {
		yield put(locationSearchFailed(error.message));
	}
}

function* locationSearchWatcher() {
	yield takeLatest(LOCATION_SEARCH, locationSearchSaga);
}

export default function* locationSearchRootSaga() {
	yield all([locationSearchWatcher()]);
}
