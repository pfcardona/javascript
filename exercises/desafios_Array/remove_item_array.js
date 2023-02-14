/**
 * How can I remove a specific item from an array in JavaScript?
 * */

function removeItemOnce(arr, value) {
    let index = arr.indexOf(value)
    if(index > -1){
        arr.splice(index,1)
    }
    return arr;
}

function removeItemAll(arr,value) {
    let i = 0
    while(i < arr.length) {
        if(arr[i] == value ) {
        arr.splice(i,1)
        } else {
            i++
        }
    }
    return arr
}
console.log(removeItemOnce([2,5,9,1,5,8,5], 5))
console.log(removeItemAll([2,5,9,1,5,8,5], 5))
