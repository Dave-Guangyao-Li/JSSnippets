/* method 1 
filter through the array using .filter().
Using a for loop we loop through each item in the object.
We use a if statement to check if the object in the collection doesn’t have the key and the property value doesn’t match the value in source.
We return false if the above if statement is correct. Otherwise, we return true;
*/


function whatIsInAName(collection, source) {

  const sourceKeys = Object.keys(source);

  // filter through collection
  return collection.filter(obj => {
    for(let i=0; i<sourceKeys.length; i++){
      if(!obj.hasOwnProperty(sourceKeys[i]) ||
      obj[sourceKeys[i]]!== source[sourceKeys[i]])
        return false;
    }
    return true
  })

}


/* method 2
We filter through the collection using .filter().
Next, we return a Boolean value for the .filter() method.
Finally, we reduce to Boolean value to be returned for the .every() method.
*/

function whatIsInAName(collection, source) {

    const sourceKeys = Object.keys(source);
  
    // filter through collection
    return collection.filter(obj => {
      return sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key]===source[key])})
    // return collection.filter(obj => sourceKeys
    //                    .every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));
  
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));