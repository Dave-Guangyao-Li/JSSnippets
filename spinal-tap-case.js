// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case


// The tricky part is getting the regular expression part to work, once you do that then just turn the uppercase to lowercase and replace spaces with dashes using replace().


//method 1
function spinalCase(str) {
    //variable for the white space and underscores.
    let regex = /\s+|_+/g;
    //Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    //replace space and underscore with -
    return str.replace(regex, '-').toLowerCase();
  }


//method 2
// The ?=n quantifier matches any string that is followed by a specific string n.
// Split the string at one of the following conditions (converted to an array)
// a whitespace character [\s] is encountered
// underscore character [_] is encountered
// or is followed by an uppercase letter [(?=[A-Z])]
// Join the array using a hyphen (-)
// Lowercase the whole resulting string

// function spinalCase(str) {
//     return str
//       .split(/\s|_|(?=[A-Z])/)
//       .join("-")
//       .toLowerCase()
//   }
  
  spinalCase('This Is Spinal Tap');