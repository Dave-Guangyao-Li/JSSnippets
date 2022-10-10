// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Using spread operator to retrieve the arguments.
// Return the filtered array, using includes().
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

// arguments 
// Array.slice()
// Array.includes() 

function destroyer(arr, ...valsToRemove) {
  
    // console.log(valsToRemove);
    return arr.filter(item=>!valsToRemove.includes(item))
    
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));