const bubbleSort = arr => {
  for (let j = 0; j < arr.length - j; j++) {
    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) {
        const interim = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = interim;
      }
    }
  }
  return arr;
};

module.exports = bubbleSort;
