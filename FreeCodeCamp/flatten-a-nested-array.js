// Steamroller
// Flatten a nested array.You must account for varying levels of nesting.

//     https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

// Waiting:steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// Waiting:steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// Waiting:steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// Waiting:steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
// Waiting:Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
// Waiting:Global variables should not be used.


// you need to check if an element is an array or not.
  //If you are dealing with an array, then you need flatten it by getting the value inside of the array.
  // recursion or another way to go beyond two level arrays to make the code flexible and not hard-coded

  




  //The Array.isArray() static method determines whether the passed value is an Array.
  function steamrollArray(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])){
       //Recursively flatten entries that are arrays
       flattenedArray.push(...steamrollArray(arr[i]));
      }else{
       // Copy contents that are not arrays
       flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray
 
    
 }
 

 /*
Use spread operator to concatenate each element of arr with an empty array
Use Array.some() method to find out if the new array contains an array still
If it does, use recursion to call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
If it does not, return the flattened array
 */
function steamrollArray(arr) {
    const flat = [].concat(...arr)
    // console.log(flat)
    return flat.some(Array.isArray)?steamrollArray(flat):flat;
}
  


 steamrollArray([1, [2], [3, [[4]]]]);