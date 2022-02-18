import React from "react";
import renderer from "react-test-renderer";
import App from "./App";
import TITLE from "@/utils/title";

describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toBe(true);
  });
});

describe("App", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<App />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it(`has title of ${TITLE}`, () => {
    renderer.create(<App />);
    expect(document.title).toBe(TITLE);
  });
});
