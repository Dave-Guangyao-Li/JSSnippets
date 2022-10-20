// Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

// Passed:dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
// Passed:dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
// Passed:dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
// Passed:dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
// Passed:dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
// Passed:dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].


// my solution: use slice()
function dropElements(arr, func) {
    // check if condition is true
    for(let i=0; i<arr.length; i++){
      const satisfied = func(arr[i]);
      if(satisfied){
        return arr.slice(i);
      }
    }
    return [];
}
  


//   Use ES6 findIndex() function to find the index of the element that passes the condition
// Slice the array from the found index until the end
function dropElements(arr, func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
  }
  


// while loop: Use a while loop with Array.prototype.shift() to continue checking 
// and dropping the first element of the array until the function returns true.
// It also makes sure the array is not empty first to avoid infinite loops.
function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });