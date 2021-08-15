import {
	takeEvery,
	takeLatest,
	all,
	call,
	put,
	takeLeading,
} from "redux-saga/effects";
import { GET_DISTANCE } from "../../constants/actionType";
import { distanceApi } from "../../api/location/distanceApi";
import {
	getDistanceSuccess,
	getDistanceFailed,
} from "../actions/getDistanceAction";

function* getDistanceSaga(payload) {
	try {
		const data = yield call(distanceApi, payload);
		console.log("distance saga", data);
		yield put(
			getDistanceSuccess({ vendor: payload.payload.vendor, data: data })
		);
	} catch (error) {
		yield put(getDistanceFailed(error.message));
	}
}

function* getDistanceWatcher() {
	yield takeEvery(GET_DISTANCE, getDistanceSaga);
}

export default function* getDistanceRootSaga() {
	yield all([getDistanceWatcher()]);
}
