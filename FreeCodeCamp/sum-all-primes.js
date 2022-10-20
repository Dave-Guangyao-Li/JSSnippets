// Sum All Primes

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// sumPrimes(10) should return a number.
// Failed:sumPrimes(10) should return 17.
// Failed:sumPrimes(977) should return 73156.



// method1: We loop over all values in our range, adding them to the sum if they are prime.

function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
}
  

//method: In this solution we retain a list of all primes found so far 
//and check if any of these numbers divide into each number in our range.

// Note that this solution is actually less efficient than Solution 1 for very large values of n. 
//Frequently growing the size of an array in JavaScript can be inefficient and slow.

function sumPrimes(num) {
    // Check all numbers for primality
    let primes = [];
    for (let i = 2; i <= num; i++) {
      if (primes.every((prime) => i % prime !== 0))
        primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
  }