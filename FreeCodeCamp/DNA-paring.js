// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

// 12min
// DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// my solution:
function pairElement(str) {
    const dnfArr = str.split("");//[ 'G', 'C', 'G' ]
    const resultArr = []
    for(let basePair of dnfArr){
      switch(basePair) {
        case "G":
          resultArr.push((basePair + "C").split(""))
          break;
        case "C":
          resultArr.push((basePair + "G").split(""))
          break;
        case "A":
          resultArr.push((basePair + "T").split(""))
          break;
        case "T":
          resultArr.push((basePair + "A").split(""))
          break;
      }
    }
    console.log(resultArr);
    return resultArr;
  }
  
  pairElement("GCG");
  pairElement("ATCGA");
  pairElement("CTCTA");