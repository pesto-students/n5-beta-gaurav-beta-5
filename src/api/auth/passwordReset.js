import { appId, restKey, serverUrl } from "../../shared/api/config";

export async function passwordResetApi({ payload }) {
	try {
		const url = serverUrl + "requestPasswordReset";
		const body = {
			email: payload.email,
		};

		const passwordResetDataResponse = await fetch(url, {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": appId,
				"X-Parse-REST-API-Key": restKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		return await passwordResetDataResponse.json();
	} catch (errors) {
		return errors;
	}
}
