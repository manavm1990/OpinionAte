/* eslint-disable jest/expect-expect */

import title from "@/utils/title";

describe("Smoke Test", () => {
  it("can view the home 🏠 page 📃", () => {
    cy.visit("/");
    cy.contains(title);
  });
});
