describe("Product checkout flow", () => {
	it("is able to take user to payment page", () => {
		cy.visit("/");
		cy.get("#home-decor").click();
		cy.get(".sub-category-item").first().click();
		// cy.get("#email").type("omkarkamale@gmail.com");
		// cy.get("#password").type("0000");
		// cy.get("#login").click();
	});
});
