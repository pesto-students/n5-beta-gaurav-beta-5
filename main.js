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
