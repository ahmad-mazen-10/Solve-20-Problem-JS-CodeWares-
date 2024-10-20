//problem ::  Consider an array/list of sheep where some sheep may be missing from their place. We need a   function that counts the number of sheep present in the array (true means present).

// solution ::
// 1- create counter?
// 3- check null | undefined.
// 3- for loop [if (true) count++]




function countSheeps(arrOfSheeps) {
    // return arrOfSheeps.filter((sheep) => sheep).length;

    let counter = 0;
    let newArr = arrOfSheeps.filter((e) => { 
         if (e === true)  counter++ 
        });
         return counter
  }

  let arrOfSheeps=
  [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];


    console.log(countSheeps(arrOfSheeps));