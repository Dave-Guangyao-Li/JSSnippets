// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents

// Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return the string Aren't bonfires fun!?
// Waiting:binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return the string I love FreeCodeCamp!



// first convert from binary to decimal before translating those values into characters.
// String.prototype.charCodeAt 
// String.fromCharCode
// Convert to decimal by using parseInt(_binary_, 2). Use the second parameter to specify the base of the input numbers.
function binaryAgent(str) {
    let biString = str.split(" ");
    // console.log(biString);
    let uniString = [];
    /*using the radix (or base) parameter in parseInt, 
    we can convert the binary number to a decimal number 
    while simultaneously converting to a char*/
  
    for (let i = 0; i < biString.length; i++) {
      uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
    console.log(uniString.join(""));
    return uniString.join("");
}
  


function binaryAgent(str) {
    //   First we use split() to be able to work on each character as an Array element
    // Then use map() to process each element from binary to decimal using pareseInt()
    // Last we can use String.fromCharCode() to convert each ASCII number into the corresponding character
    // However fromCharCode() expects a series of numbers rather than an Array! We can use ES6 Spread Operator to pass in an Array of numbers as individual numbers.
    
      return (String.fromCharCode(...str.split(" ").map((char)=>parseInt(char,2))))
}
    
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");