// problem : Complete the solution so that it reverses the string passed into it.

// solution
// 1-turn the string to array.
// 2-reverse th array.
// 3-return array to string



function solution(str){
  return str.split('').reverse().join('');
}

console.log(solution('mazen'))