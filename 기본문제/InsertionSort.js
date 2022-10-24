const insertionSort = (arr) =>{
    for (var i=1; i<arr.length; i++){
        var selectVal = arr[i]
        for (var j=i-1; j>=0 && arr[j]>selectVal; j--){
           arr[j+1]=arr[j]
           console.log(arr, "진행사항 확인")
        }
        arr[j+1] = selectVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])

