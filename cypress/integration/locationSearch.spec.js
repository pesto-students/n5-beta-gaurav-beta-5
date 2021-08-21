describe("Location search", () => {
	it("is able to search location", () => {
		cy.visit("/");
		cy.get(".location-text").click();
		cy.get("#modal-close").click();
		cy.get(".location-text").click();
		cy.get("#search-input").type("nerul");
		cy.get(".search-result").first().click();
		cy.get(".select-location").click();
		cy.get(".location-text").contains("Nerul");
	});
});
