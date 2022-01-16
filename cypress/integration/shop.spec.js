describe("Shop page test", () => {
  it("Visits the Shop page", () => {
    cy.visit("http://localhost:8080/shop");
    cy.contains("h1", "Программы");
  });
});
