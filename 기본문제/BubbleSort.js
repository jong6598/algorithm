const bubbleSort = (arr) => {
    for (let i=arr.length; i>0; i--){
        for (let j=0; j<=i-1; j++){
            //i가 감소할때 마다 j도 줄어들기 때문에 루프의 실행 횟수가 점차 감소함
            console.log(arr, arr[j], arr[j+1])
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([3,54,12,8,18])