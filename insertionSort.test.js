const insertionSort = require("./insertionSort");

describe("insertionSort", () => {
  it("should return [1] when input [1]", () => {
    expect(insertionSort([1])).toEqual([1]);
  });

  it("should return [1,2] when input [2,1]", () => {
    expect(insertionSort([2, 1])).toEqual([1, 2]);
  });

  it("should return [1,2,3] when input [3,2,1]", () => {
    expect(insertionSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
});
