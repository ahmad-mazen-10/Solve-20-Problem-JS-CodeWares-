// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
    let arr = [];
    let n = x.toString().split("").map((num) => num * 2).join(",");
      arr.push(n);
      return arr;

    //    let newArr = [];
    // for(let i = 0; i < x.length; i++){
    //     newArr.push(x[i] * 2);
    // }
    // return newArr;
}
console.log(maps(54321));
