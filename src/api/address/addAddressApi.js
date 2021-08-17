import { appId, restKey, serverUrl } from "../../shared/api/config";

export async function addAddressApi({ payload }) {
	try {
		const url = `${serverUrl}functions/addAddressByUserIdApi`;
		const body = payload;
		const addAddressesResponse = await fetch(url, {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": appId,
				"X-Parse-REST-API-Key": restKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		return await addAddressesResponse.json();
	} catch (errors) {
		return errors;
	}
}
