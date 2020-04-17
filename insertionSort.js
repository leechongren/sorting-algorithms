const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let holder = arr[i];
    let counter = i;
    while (arr[counter - 1] > holder && counter > 0) {
      arr[counter] = arr[counter - 1];
      counter--;
    }
    arr[counter] = holder;
  }
  return arr;
};

module.exports = insertionSort;
