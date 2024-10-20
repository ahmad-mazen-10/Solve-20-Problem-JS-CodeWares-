// You get an array of numbers, return the sum of all of the positives ones.


  function positiveSum(arr) {
    // Calculate the sum of all positive numbers in the array.
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
  
    // Return the sum of all positive numbers in the array.
    return sum;
  }

  console.log(positiveSum())


function posnumber(){
    let arr=[1,-2,3,-4,5,-6,7]
    let sum=0;
    for(let n=0; n<arr.length; n++){
        if(arr[n]>0){
            sum +=n;
        }
    }
    document.write(sum);
}

posnumber()