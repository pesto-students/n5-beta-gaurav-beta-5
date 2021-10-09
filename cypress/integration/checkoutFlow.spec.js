describe("Product checkout flow", () => {
	it("is able to take user to payment page", () => {
		cy.visit("/");
		cy.get("#home-decor").click();
		cy.get(".sub-category-item").first().click();
		cy.get(".pc-add-to-cart").first().click();
		cy.get("#cart-icon").click();
		cy.url().should("include", "/cart");
		cy.get(".proceed-to-buy").first().click();

		cy.get("#email").type("omkarkamale@gmail.com");
		cy.get("#password").type("0000");
		cy.get("#login").click();
		cy.get(".below-payment").first().click();
		cy.get(".delivery-address-btn").first().click();
		cy.get(".make-payment").first().click();
	});
});
