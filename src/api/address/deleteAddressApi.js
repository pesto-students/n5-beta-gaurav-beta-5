import { appId, restKey, serverUrl } from "../../shared/api/config";

export async function deleteAddressApi({ payload }) {
	try {
		const url = `${serverUrl}functions/deleteAddressApi`;
		const body = payload;
		const deleteAddressResponse = await fetch(url, {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": appId,
				"X-Parse-REST-API-Key": restKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		return await deleteAddressResponse.json();
	} catch (errors) {
		return errors;
	}
}
