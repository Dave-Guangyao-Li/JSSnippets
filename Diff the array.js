// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

function diffArray(arr1, arr2) {
    //  const newArr = arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
    //  console.log(newArr);
    //  return newArr;
  
    const newArr = [];
    for(let i=0; i<arr1.length; i++){
      if(arr2.indexOf(arr1[i])===-1){
        newArr.push(arr1[i])
      }
    }
    
    for(let i=0; i<arr2.length; i++){
      if(arr1.indexOf(arr2[i])===-1){
        newArr.push(arr2[i])
      }
    }
  
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);