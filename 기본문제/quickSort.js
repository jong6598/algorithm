const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  let point = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (point > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([8, 1, 33, 27, 4]));
