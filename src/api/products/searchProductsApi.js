import { appId, restKey, serverUrl } from "../../shared/api/config";

export async function searchProductsApi(payload) {
	try {
		const url = `${serverUrl}/functions/searchProductsApi`;

		const body = payload;

		const getProductsResponse = await fetch(url, {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": appId,
				"X-Parse-REST-API-Key": restKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		return await getProductsResponse.json();
	} catch (errors) {
		return errors;
	}
}
