Parse.Cloud.define("getCategoriesApi", async (request) => {
	const queryCategories = new Parse.Query("Category");
	const resultsCategories = await queryCategories.find();
	return resultsCategories;
});

Parse.Cloud.define("getSubCategoriesApi", async (request) => {
	const querySubCategories = new Parse.Query("SubCategory");
	const resultsSubCategories = await querySubCategories.find();
	return resultsSubCategories;
});

Parse.Cloud.define("getProductsBySubCategoryApi", async (request) => {
	const subCategoryId = request.params.subCategoryId;
	const queryProducts = new Parse.Query("Products");
	const subCategoryPointer = {
		__type: "Pointer",
		className: "SubCategory",
		objectId: subCategoryId,
	};
	queryProducts.equalTo("subCategoryRef", subCategoryPointer);
	queryProducts.include("vendorRef");
	queryProducts.include("subCategoryRef");
	const resultsProducts = await queryProducts.find();
	return resultsProducts;
});

Parse.Cloud.define("getProductsByCategoryApi", async (request) => {
	const categoryId = request.params.categoryId;
	const queryProducts = new Parse.Query("Products");
	const categoryPointer = {
		__type: "Pointer",
		className: "Category",
		objectId: categoryId,
	};
	queryProducts.equalTo("categoryRef", categoryPointer);
	queryProducts.include("vendorRef");
	queryProducts.include("categoryRef");
	const resultsProducts = await queryProducts.find();
	return resultsProducts;
});

Parse.Cloud.define("getProductByIdApi", async (request) => {
	const productId = request.params.productId;
	const Products = Parse.Object.extend("Products");
	const query = new Parse.Query(Products);
	// You can also query by using a parameter of an object
	query.equalTo("objectId", productId);
	const results = await query.find();
	return results;
});

Parse.Cloud.define("getAddressesByUserIdApi", async (request) => {
	const userId = request.params.userId;
	const queryAddresses = new Parse.Query("Addresses");

	queryAddresses.equalTo("userId", userId);

	const resultsAddresses = await queryAddresses.find();
	return resultsAddresses;
});

Parse.Cloud.define("updateAddressByUserIdApi", async (request) => {
	const {
		fname,
		lname,
		street,
		pincode,
		city,
		state,
		country,
		userId,
		addressId,
	} = request.params;
	const query = new Parse.Query("Addresses");
	try {
		const object = await query.get(addressId);
		object.set("userId", userId);
		object.set("firstName", fname);
		object.set("lastName", lname);
		object.set("addressTitle", street);
		object.set("streetAddress", street);
		object.set("city", city);
		object.set("state", state);
		object.set("country", country);
		object.set("pincode", pincode);
		object.set("geoLocation", { foo: "bar" });
		try {
			const response = await object.save();
			return response;
		} catch (error) {
			return error;
			console.error("Error while updating Addresses", error);
		}
	} catch (error) {
		console.error("Error while retrieving object Addresses", error);
	}
});

Parse.Cloud.define("addAddressByUserIdApi", async (request) => {
	const { fname, lname, street, pincode, city, state, country, userId } =
		request.params;
	const object = new Parse.Object("Addresses");

	object.set("userId", userId);
	object.set("firstName", fname);
	object.set("lastName", lname);
	object.set("addressTitle", street);
	object.set("streetAddress", street);
	object.set("city", city);
	object.set("state", state);
	object.set("country", country);
	object.set("pincode", pincode);
	object.set("geoLocation", { foo: "bar" });
	try {
		const response = await object.save();
		return response;
	} catch (error) {
		console.error("Error while updating Addresses", error);
		return error;
	}
});

Parse.Cloud.define("deleteAddressApi", async (request) => {
	const { addressId } = request.params;
	const query = new Parse.Query("Addresses");
	try {
		// here you put the objectId that you want to delete
		const object = await query.get(addressId);
		try {
			const response = await object.destroy();
			console.log("Deleted ParseObject", response);
			return response;
		} catch (error) {
			console.error("Error while deleting ParseObject", error);
			return error;
		}
	} catch (error) {
		console.error("Error while retrieving ParseObject", error);
	}
});
