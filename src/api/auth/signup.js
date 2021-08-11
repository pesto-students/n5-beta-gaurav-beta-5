import { appId, restKey, serverUrl } from "../../shared/api/config";

export async function signUpAPI({ payload }) {
	try {
		const url = serverUrl + "users";
		const body = payload;
		const signUpDataResponse = await fetch(url, {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": appId,
				"X-Parse-REST-API-Key": restKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		return await signUpDataResponse.json();
	} catch (errors) {
		return errors;
	}
}
