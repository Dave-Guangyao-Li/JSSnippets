// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

// Passed:addTogether(2, 3) should return 5.
// Passed:addTogether(23, 30) should return 53.
// Passed:addTogether(5)(7) should return 12.
// Passed:addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.
// Passed:addTogether(2, "3") should return undefined.
// Passed:addTogether(2)([3]) should return undefined.
// Passed:addTogether("2", 3) should return undefined.
// Passed:addTogether(5, undefined) should return undefined.




//my solution
function addTogether() {
    console.log(arguments)
    if(typeof(arguments[0])=="number" && typeof(arguments[1])=="number"){
        console.log("num")
        return arguments[0] + arguments[1]
    }else if(typeof(arguments[0])=="number" && arguments.length===1){
      console.log("func")
        return (param)=>{
            if(typeof(param)!=="number"){
              return undefined
            }
            return arguments[0] + param;
        }
    }else{
      console.log("undefined")
      return undefined;
    }
  }
  
addTogether(2, [3]);
  



function addTogether() {
    const [first, second] = arguments;
    // First argument is not a number
    if (typeof(first) !== "number") {
      return undefined;
    }
    // First argument is a number
    //  and second argument is not defined
    else if (arguments.length === 1) {
      function addSecond(second) {
        // New argument is not a number
        if (typeof(second) !== "number") {
          return undefined;
        }
        // New argument is a number
        else {
          return first + second;
        }
      }
      // Note: returning a *function*
      return addSecond;
    }
    // First argument is a number
    //  and second argument is not a number
    else if (typeof(second) !== "number") {
      return undefined;
    }
    // First argument is a number
    //  and second argument is a number
    else {
      return first + second;
    }
}
  

//check if it has one or two arguments passed. More are ignored
function addTogether(...args) {
    const [first, second] = args;
    if (args.length === 1 && typeof first === 'number') {
      return num => {
        if (typeof num === 'number') {
          return first + num;
        }
      }
    }
    if (typeof first === 'number' && typeof second === 'number') {
      return first + second;
    }
  }