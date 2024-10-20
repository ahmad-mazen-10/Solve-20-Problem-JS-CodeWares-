// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345


function findSmallestInt(arr) {
    // let smallest = arr[0]
    // for (let i = 0; i > arr.length; i++){
    //     return arr[i] > smallest ? smallest = arr[i] : smallest;
    // }

    return Math.min(...arr)

}
console.log(findSmallestInt([12,34,54]));