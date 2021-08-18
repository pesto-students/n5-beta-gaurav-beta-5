import { appId, restKey, serverUrl } from "../../shared/api/config";

export async function getProductByIdApi(payload) {
	try {
		const url = `${serverUrl}/functions/getProductByIdApi`;

		const body = payload;

		const getProductByIdResponse = await fetch(url, {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": appId,
				"X-Parse-REST-API-Key": restKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		return await getProductByIdResponse.json();
	} catch (errors) {
		return errors;
	}
}
