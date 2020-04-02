const insertionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      const holder = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = holder;
    }
  }
  return arr;
};

module.exports = insertionSort;
