
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin


// my solution
// If there is a match (and in this case, there always will be), match() returns an Array with the matched string as the first element, which is all we want. Grab it with [0].
function translatePigLatin(str) {
    let vowelRegex = /^[aeiou]/;
    let consonantRegex = /[^aeiou]+/;
    if(str.search(vowelRegex)===-1){
      let consonantGroup = str.match(consonantRegex);
      // console.log(consonantGroup)
      return(str.replace(consonantRegex, "").concat(consonantGroup,"ay"))
    }else{
      return(str.concat("way"))
    }
  
  }
  

//using substring()
function translatePigLatin(str) {
    let vowelRegex = /^[aeiou]/;
    let consonantRegex = /[^aeiou]+/;
    if(str.search(vowelRegex)===-1){
    let consonantCluster = str.match(consonantRegex)[0];
    // console.log(consonantGroup)
    // return(str.replace(consonantRegex, "").concat(consonantGroup,"ay"))
    return (str.substring(consonantCluster.length) + consonantCluster + "ay");
    }else{
    return(str.concat("way"))
    }

}


  translatePigLatin("california");
  translatePigLatin("algorithm");
  translatePigLatin("glove");




  translatePigLatin("california");
  translatePigLatin("algorithm");
  translatePigLatin("glove");