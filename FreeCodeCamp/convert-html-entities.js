// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
// Passed:convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
// Passed:convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
// Passed:convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
// Passed:convertHTML("Schindler's List") should return the string Schindler&apos;s List.
// Passed:convertHTML("<>") should return the string &lt;&gt;.
// Passed:convertHTML("abc") should return the string abc.

//my solution
function convertHTML1(str) {
    let encodedStr = str.replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;")
                        .replace(/'/g, "&apos;")
                        .replace(/"/g, "&quot;")
    console.log(encodedStr)
    return encodedStr;
}
  
function convertHTML2(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str
      .split("")
      .map(entity => htmlEntities[entity] || entity)
      .join("");
  }
  
  function convertHTML3(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  
  // test here
  convertHTML1("Dolce & Gabbana");
  convertHTML2("Dolce & Gabbana")
  convertHTML3("Hamburgers < Pizza < Tacos");