// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union


// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.



function uniteUnique(arr) {
    // //method1: brute force
    // let args = [...arguments];
    // let result = [];
    // for(let i=0; i<args.length; i++){
    //     for(let j=0; j<args[i].length; j++){
    //     if(!result.includes(args[i][j])){
    //         result.push(args[i][j]);
    //     }
    //     }
    // }
    // return result;

    // // method2: flat then create hashset
    // let args = [...arguments];
    // return [...new Set(args.flat())];

    // Method3:use arguments object and the indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    // return [...arguments].flat().filter((item, index, arr) => arr.indexOf(item) === index);
}
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));