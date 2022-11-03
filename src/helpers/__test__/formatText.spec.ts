import { cleanString } from "./../formatText";
describe("Format text", () => {
  it("should clean text", async () => {
    const dirtText = "SAO PAULO";
    expect(cleanString(dirtText)).toEqual("sao paulo");
  });
});
