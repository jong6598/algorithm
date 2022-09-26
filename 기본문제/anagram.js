function validAnagram(a, b){
    //a와 b의 길이가 다르다면 false 리턴하기 
    if (a.length !== b.length ) {
        return false;
    } 
    //빈도카운터를 이용해 빈도수 카운터 돌리기
    let frequency1 = {};
    let frequency2 = {};
    for (let val of a){
        frequency1[val] = (frequency1[val] || 0 ) + 1
    }
    for (let val of b){
        frequency2[val] = (frequency2[val] || 0 ) + 1
    }
    //포문을 사용해 두개가 같은 키 가지고 있는지 확인하기
    for (let key in frequency1) {
        if (!(key in frequency2)){
            return false;
        }
        //키 값 마다 같은 벨류값을 가지고 있는지 확인하기
        if (frequency1[key] !==frequency2[key]){
            return false
        }
    }
    return true;
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true