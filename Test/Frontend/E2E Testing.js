/// E2E Testing (cypress)


describe("App", () => {
  it("loads home", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Home");
  });
});

