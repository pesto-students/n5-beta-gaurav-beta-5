import {
	takeEvery,
	takeLatest,
	all,
	call,
	put,
	select,
	takeLeading,
} from "redux-saga/effects";
import { ADD_TO_CART, DELETE_TO_CART } from "../../constants/actionType";

import {
	addToCartSuccess,
	addToCartFailed,
	updateToCartSuccess,
	deleteToCartSuccess,
} from "../actions/addToCartActions";

export const getCart = (state) => state.myCart.cart;

function* addToCartSaga(data) {
	try {
		const cartItems = yield select(getCart);
		const productIndex = cartItems.findIndex(
			(product) => product.objectId === data.payload.objectId
		);
		//console.log("productIndex", productIndex);
		if (productIndex >= 0) {
			const qty = cartItems[productIndex].qty;

			if (data.payload?.type === "UPDATE_ONLY_QTY") {
				data.payload.qty = data.payload.qty;
				//console.log(" Before payload", data.payload);
				delete data.payload.type;
			} else {
				data.payload.qty = data.payload.qty + qty;
			}
			data.payload.subTotal = data.payload.price * data.payload.qty;
			//console.log("After payload", data.payload);

			yield put(updateToCartSuccess(data.payload));
		} else {
			data.payload.subTotal = data.payload.price * data.payload.qty;
			yield put(addToCartSuccess(data.payload));
		}
	} catch (error) {
		yield put(addToCartFailed(error.message));
	}
}

function* deleteToCartSaga(data) {
	try {
		//console.log("data type", data.payload.type);
		const cartItems = yield select(getCart);
		switch (data.payload.type) {
			case "REMOVE_ALL":
				cartItems.length = 0;
				yield put(deleteToCartSuccess(cartItems));
				break;
			default:
				const removeProdIndex = cartItems.findIndex(
					(product) => product.objectId === data.payload.id
				);
				console.log(
					"removeProdIndex",
					removeProdIndex,
					data.payload.id
				);
				cartItems.splice(removeProdIndex, 1);
				yield put(deleteToCartSuccess(cartItems));

				break;
		}
	} catch (error) {}
}

function* addToCartWatcher() {
	yield takeLatest(ADD_TO_CART, addToCartSaga);
}

function* deleteToCartWatcher() {
	yield takeLatest(DELETE_TO_CART, deleteToCartSaga);
}

export default function* addToCartRootSaga() {
	yield all([addToCartWatcher(), deleteToCartWatcher()]);
}
