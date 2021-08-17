import { appId, restKey, serverUrl } from "../../shared/api/config";

export async function updateAddressApi({ payload }) {
	try {
		const url = `${serverUrl}functions/updateAddressByUserIdApi`;
		const body = payload;
		const updateAddressesResponse = await fetch(url, {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": appId,
				"X-Parse-REST-API-Key": restKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		return await updateAddressesResponse.json();
	} catch (errors) {
		return errors;
	}
}
