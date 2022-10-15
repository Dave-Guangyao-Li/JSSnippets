// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters


// my solution
function fearNotLetter(str) {
    // for loop search alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    let left = str[0];
    let right = str[str.length-1]
    if(alphabet.indexOf(right) - alphabet.indexOf(left) === str.length-1){
      return undefined;
    }else{
      // search boundary
      let start = alphabet.indexOf(left);

      for(let i=0; i<str.length; i++){
        
        //serch corresponding position in alphabet string
        if(alphabet.at(start)!==str[i]){ // find mismatch
          // console.log(alphabet.at(i));
          return alphabet.at(start);
        }else{
          start ++ ; // search next position
          // console.log(start)
        }
        
      }
    }

  }
  
fearNotLetter("stvwx");
  

