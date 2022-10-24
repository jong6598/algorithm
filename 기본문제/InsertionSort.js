const insertionSort = (arr) =>{
    for (var i=1; i<arr.length; i++){
        var selectVal = arr[i]
        for (var j=i-1; j>=0 && arr[j]>selectVal; j--){
           arr[j+1]=arr[j]
        }
        arr[j+1] = selectVal;
        console.log(selectVal,arr)
    }
    return arr;
}

insertionSort([23,32,9,24,17,4])