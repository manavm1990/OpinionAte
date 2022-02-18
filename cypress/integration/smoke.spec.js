/* eslint-disable jest/expect-expect */

import TITLE from "@/utils/title";

describe("Smoke Test", () => {
  it("can view the home 🏠 page 📃", () => {
    cy.visit("/");
    cy.contains(TITLE);
  });
});
