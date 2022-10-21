const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      console.log(i, min);
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        console.log(arr, "done");
    }
  }
  return arr;
};

selectionSort([38, 8, 9, 155, 7, 2]);
selectionSort([38, 8, 9, 155, 7, 2]);
