const insertionSort = (arr) =>{
    for (let i=1; i<arr.length; i++){
        let selectVal = arr[i]
        for (let j=i-1; j>=0&arr[j]>selectVal; j--){
           arr[j+1]=arr[j]
        }
        arr[j+1] = selectVal;
    }
    return arr;
}

insertionSort([23,32,9,24,17,4])