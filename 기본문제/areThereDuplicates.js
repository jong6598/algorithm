function areThereDuplicates(...a) {
    let array_a =a.toString().split(',')
    let frequency_a = {};
    for (let val of array_a){
        frequency_a[val]=(frequency_a[val] || 0) +1
    }
    for (let key in frequency_a) {
        if (frequency_a[key]>1) return true;
    }return false;
}

// function areThereDuplicates() {
//     let frequency_a = {};
//     for (let val in arguments ){
//         frequency_a[arguments[val]]=(frequency_a[arguments[val]] || 0) +1
//     }
//     for (let key in frequency_a) {
//         if (frequency_a[key]>1)
//             return true;
//     }
//     return false;
// }
