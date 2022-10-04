function averagePair(arr, num){
    //배열이 빈 값인 경우 false를 반환
    if (arr.length===0 &&num!==0) {
        return false;  
    }
    //포인터를 하나는 0인덱스에서 하나는 마지막 인덱스에서 시작함
    let i = 0;
    let j = arr.length-1
    //두번째 포인터가 첫번째 포인터보다 값일 커야 중복 계산을 막을 수 있음.
    while (i<j){
        let avg = (arr[i]+arr[j]) / 2
        if (avg === num) {
            return true;
        } else if (avg<num) {
            //오름차순 배열이기 때문에 주어진 값이 평균값 보다 클때 첫번째 포인터의 값을 하나 올려줌
            i++
        }
        else {
            //같지도 않고, avg 값이 더 클때 두번째 포인터 값을 하나 빼줌
            j--
        }
    }
    return false;
}

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false