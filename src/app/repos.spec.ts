import { Repos } from "./repos";

describe("Repos", () => {
  it("should create an instance", () => {
    expect(new Repos("", "", 0, 0, "", 0)).toBeTruthy();
  });
});
