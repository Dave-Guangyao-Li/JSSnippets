// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// smallestCommons([1, 5]) should return a number.
// Passed:smallestCommons([1, 5]) should return 60.
// Passed:smallestCommons([5, 1]) should return 60.
// Passed:smallestCommons([2, 10]) should return 2520.
// Passed:smallestCommons([1, 13]) should return 360360.
// Passed: smallestCommons([23, 18]) should return 6056820.



// first start with finding the smallest common multiple between two numbers. Naively, we can start writing out multiple of each number until we write a multiple that exists from both numbers.
// faster approach is to check all multiples of 4 to see if they are also multiples of 3, by checking the remainder when we divide the multiple of 4 by 3.
// do not forget the keyword range. If we are given [1, 5], then we have to check for the smallest common multiple for all the numbers [1, 2, 3, 4, 5], which is the smallest number that is evenly divisible by all of them.

function smallestCommons(arr) {

    //correct the range
    let [min, max] = arr.sort((a,b)=>a-b);
    // build up range [1,2,3,4,5]
    const range = Array(max - min + 1)
      .fill(0)
      .map((_, i) => i + min);
    let numberDivisors = max - min + 1;
    // Largest possible value for SCM
  
    // Traditional loop
    // let upperBound = 1;
    // for (let i = min; i <= max; i++) {
    //   upperBound *= i;
    // }
  
    //ES 6
    const upperBound = range.reduce((prod, curr)=> prod * curr);
    // test all multiples of max's 
    for(let multiple=max; multiple <= upperBound; multiple+=max){
      // Check if every value in range divides 'multiple'
      // ES6 method
      const divisible = range.every((value) => multiple % value === 0);
      if (divisible) {
        return multiple;
      }
  
  
      // traditional method
      // for(let i=min; i<=max; i++){
      //   // should be divisible for all divisors
      //   let divisorsCount = 0;
      //   if(multiple%i===0){
      //     divisorsCount +=1;
      //   }
      // }
      // // every value in the range can be divided evenly
      // if (divisorsCount === numberDivisors) {
      //   return multiple;
      // }
    }
  }
  
  smallestCommons([1,5]);