function sameFrequency(array1,array2){
    if (array1.length !== array2.length) return false;
    let frequency1 = {};
    let frequency2 = {};
    for (let val in array1){
        frequency1[val] = (frequency1[val] || 0 ) + 1
    }
    for (let val in array2){
        frequency2[val] = (frequency2[val] || 0 ) + 1
    }
    //포문을 사용해 두개가 같은 키 가지고 있는지 확인하기
    for (let key in frequency1) {
        if (!(key in frequency2)){
            return false;
        }
        //키 값 마다 같은 벨류값을 가지고 있는지 확인하기
        if (frequency1[key] !==frequency2[key]){
            return false;
        }
    }
    return true;
}

const result = sameFrequency(183,281)
console.log(result)