const insertionSort = require("./insertionSort");

describe("insertionSort", () => {
  it("should return [1] when input [1]", () => {
    expect(insertionSort([1])).toEqual([1]);
  });
});
