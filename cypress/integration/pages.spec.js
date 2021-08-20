describe("renders the home page and login", () => {
	it("home page renders correctly and user is able to login", () => {
		cy.visit("/");
		cy.get("#user-profile").click();
		cy.url().should("include", "/signin");
		cy.get("#email").type("omkarkamale@gmail.com");
		cy.get("#password").type("0000");
		cy.get("#login").click();
	});
});

// describe("renders the category page", () => {
// 	it("renders correctly", () => {
// 		cy.visit("/categories");
// 	});
// });
