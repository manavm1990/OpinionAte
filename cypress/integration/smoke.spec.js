/* eslint-disable jest/expect-expect */

describe("Smoke Test", () => {
  it("can view the home 🏠 page 📃", () => {
    cy.visit("/");
    cy.contains("Hello World!");
  });
});
