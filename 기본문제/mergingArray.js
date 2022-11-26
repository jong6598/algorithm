//i 와 j 0부터 시작하는 카운터
//i카운터 배열과 j카운터배열의 1번째 요소를 비교하여 작은것을 결과로 리턴할 배열에 집어넣고, 카운터 ++을 해준다.
//하나의 배열이 마지막에 도달하면 다른 배열의 요소를 다 넣어줌

const merge = (array1, array2) => {
  let i = 0;
  let j = 0;
  const answer_array = [];
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      answer_array.push(array1[i]);
      i++;
    } else {
      answer_array.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    answer_array.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    answer_array.push(array2[j]);
    j++;
  }
  return answer_array;
};

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const left_array = mergeSort(array.slice(0, mid));
  const right_array = mergeSort(array.slice(mid));
  return merge(left_array, right_array);
};

console.log(mergeSort([11, 7, 8, 100, 32, 57]));
