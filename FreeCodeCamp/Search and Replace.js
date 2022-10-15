// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


//my solution:
function myReplace(str, before, after) {
    let result = str.replace(before, after);
    const regex = /^[A-Z]/g; //search whether first char is uppercase
    // reserve the case
    if(before.match(regex)){
      result = result.replace(after, after[0].toUpperCase()+ after.substr(1));
      // console.log(result);
    }else{
      result = result.replace(after, after[0].toLowerCase()+ after.substr(1));
    }
    console.log(result)
    return result;
    
    
  }
  
  myReplace("Let us go to the store", "store", "mall");