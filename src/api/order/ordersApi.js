import { appId, restKey, serverUrl } from "../../shared/api/config";

export async function createOrderApi({ payload }) {
	try {
		const url = `${serverUrl}classes/Orders`;

		const body = payload;
		console.log("order body payload", body);
		const createOrderResponse = await fetch(url, {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": appId,
				"X-Parse-REST-API-Key": restKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		return await createOrderResponse.json();
	} catch (errors) {
		return errors;
	}
}

export async function getOrdersApi(payload) {
	try {
		const url = `${serverUrl}functions/getOrdersByUserIdApi`;

		const body = payload;

		const getOrdersResponse = await fetch(url, {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": appId,
				"X-Parse-REST-API-Key": restKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		return await getOrdersResponse.json();
	} catch (errors) {
		return errors;
	}
}
