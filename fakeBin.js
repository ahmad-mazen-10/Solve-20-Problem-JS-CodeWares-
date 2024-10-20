// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// function fakeBin(x) {
//   let result = "";
//   let strX = x.toString();

//   for (let i = 0; i < strX.length; i++) {
//       let num = parseInt(strX[i]);
//     result += num >= 5 ? "1" : "0";
//   }

//   return result;
// }
// console.log(fakeBin(7654356));

function fakeBin(x) {
    // return x.toString().split('').map((x=>x<5).replace(x,0)).join('');
    return x.toString().split('').map(num => num >= 5 ? 1 : 0).join('');
}
console.log(fakeBin(7654356));
