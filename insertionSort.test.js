const insertionSort = require("./insertionSort");

describe("insertionSort", () => {
  it("should return empty array if array is empty", () => {
    expect(insertionSort([])).toEqual([]);
  });

  it("should return [1] when input [1]", () => {
    expect(insertionSort([1])).toEqual([1]);
  });

  it("should return sorted array if array is not sorted", () => {
    expect(insertionSort([1, 10, 3, 5])).toEqual([1, 3, 5, 10]);
  });

  it("should return sorted array if array is reversely sorted", () => {
    expect(insertionSort([10, 5, 3, 1])).toEqual([1, 3, 5, 10]);
  });

  it("should return sorted array if array is not sorted with negative numbers", () => {
    expect(insertionSort([1, -10, 3, 5])).toEqual([-10, 1, 3, 5]);
  });

  it("should return sorted array if has duplicates", () => {
    expect(insertionSort([2, 1, 1, 3, 5])).toEqual([1, 1, 2, 3, 5]);
  });
});
