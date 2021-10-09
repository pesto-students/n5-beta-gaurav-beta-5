export const getProductListApi = () => {
	return fetch("https://fakestoreapi.com/products")
		.then((response) => response.json())
		.then((jsondata) => jsondata)
		.catch((error) => Promise.reject(error));
};
