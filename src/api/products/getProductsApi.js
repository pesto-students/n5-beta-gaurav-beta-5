import { appId, restKey, serverUrl } from "../../shared/api/config";

export async function getProductsApi({ payload }) {
	try {
		const url1 = `${serverUrl}/functions/getProductsByCategoryApi`;
		const url2 = `${serverUrl}/functions/getProductsBySubCategoryApi`;
		const body = payload.body;
		const type = payload.type;
		let url = type === "category" ? url1 : url2;
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
