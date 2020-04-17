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

  it("should return [1,2,3,4] when input [3,2,4,1]", () => {
    expect(insertionSort([3, 2, 4, 1])).toEqual([1, 2, 3, 4]);
  });

  it("should return [2,3,4,6,8] when input [4,2,3,8,6]", () => {
    expect(insertionSort([4, 2, 3, 8, 6])).toEqual([2, 3, 4, 6, 8]);
  });

  it("should return [2,3,3,4,6,8] when input [4,2,3,8,6,3]", () => {
    expect(insertionSort([4, 2, 3, 8, 6, 3])).toEqual([2, 3, 3, 4, 6, 8]);
  });
});
