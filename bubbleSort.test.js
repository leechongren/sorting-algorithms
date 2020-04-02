const bubbleSort = require("./bubbleSort");

describe("Bubble Sort", () => {
  it("should sort [2,1] into [1,2]", () => {
    expect(bubbleSort([2, 1])).toStrictEqual([1, 2]);
  });

  it("should sort [3,1,2] into [1,2,3]", () => {
    expect(bubbleSort([3, 1, 2])).toStrictEqual([1, 2, 3]);
  });

  it("should sort [8,1,2,3,5] into [1,2,3,5,8]", () => {
    expect(bubbleSort([8, 1, 2, 3, 5])).toStrictEqual([1, 2, 3, 5, 8]);
  });

  it("should sort [8,6,2,3,5] into [2,3,5,6,8]", () => {
    expect(bubbleSort([8, 6, 2, 3, 5])).toStrictEqual([2, 3, 5, 6, 8]);
  });

  it("should sort [8,2,6,3,5] into [2,3,5,6,8]", () => {
    expect(bubbleSort([8, 2, 6, 3, 5])).toStrictEqual([2, 3, 5, 6, 8]);
  });
});
