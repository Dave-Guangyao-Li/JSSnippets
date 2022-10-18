// Sum All Odd Fibonacci Numbers
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// sumFibs(1) should return a number.
// Waiting:sumFibs(1000) should return 1785.
// Waiting:sumFibs(4000000) should return 4613732.
// Waiting:sumFibs(4) should return 5.
// Waiting:sumFibs(75024) should return 60696.
// Waiting:sumFibs(75025) should return 135721.


// // method1: Create a variable to keep record of the current and previous numbers along with the result that will be returned.
// function sumFibs(num) {
//   // checks for the validity of the input
//   if (num <= 0) return 0;
//   //You will need to gather all the Fibonacci numbers and then check for the odd ones. Once you get the odd ones then you will add them all.
//   let previousNum = 0;
//   let currentNum = 1;
//   let result = 0;
//   while(currentNum<=num){
//     // We use the modulo operand to check if the current number is odd or even. If it is odd, add it to the result.
//     if(currentNum%2!=0){ // odd number
//       result += currentNum;
//     }

// // Complete the Fibonacci circle by rotating getting the next number and swapping values after.
//     let temp = currentNum;
//     currentNum += previousNum;
//     previousNum = temp;
//     }
//   console.log(result);
//   return result;
// }

//method2: 
// Create an array of fibonacci numbers till num.
// Use filter() method to filter out even numbers.
// Use reduce() method to sum the remaining (odd) values.
// Return the sum.

// Note that this solution will be slower than Solution 1, as dynamically creating an array is rather slow, especially in JavaScript.
function sumFibs(num) {
    // Perform checks for the validity of the input
    if (num <= 0) return 0;
  
    // Create an array of fib numbers till num
    const arrFib = [1, 1];
    let nextFib = 0;
  
    // We put the new Fibonacci numbers to the front so we
    // don't need to calculate the length of the array on each
    // iteration
    while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
      arrFib.unshift(nextFib);
    }
  
    // We filter the array to get the odd numbers and reduce them to get their sum.
    return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
  }
  
  
  sumFibs(75025);