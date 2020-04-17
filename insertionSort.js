const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let counter = i;
    while (arr[counter] > arr[counter + 1] && counter >= 0) {
      const holder = arr[counter];
      arr[counter] = arr[counter + 1];
      arr[counter + 1] = holder;
      counter--;
    }
  }
  return arr;
};

module.exports = insertionSort;
