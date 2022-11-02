// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


// Passed:rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
// Passed:rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
// Passed:rot13("SERR YBIR?") should decode to the string FREE LOVE?
// Passed:rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS


// https://www.youtube.com/watch?v=HASDDMBGIcQ

function rot13(str) {
    //All letters will be uppercase. Do not transform any non-alphabetic character
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let answer = "";
    for(let i=0; i<str.length; i++){
      let currCharIndex = alphabet.indexOf(str[i]);
      if(currCharIndex>=13){
        // for encoded str from N-Z, just subtract 13 to decode
        answer += alphabet[currCharIndex-13];
      }else if(currCharIndex<13 && currCharIndex > -1){
        // for encoded str from A-M, plus 13 (circular)
        answer += alphabet[currCharIndex+13];
      } else if(currCharIndex===-1){
        // -1 means it is not in the alphabet
        answer += str[i];
      }
    }
    return answer;
  }
  
  console.log(rot13("SERR PBQR PNZC"));