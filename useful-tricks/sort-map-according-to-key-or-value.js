// how to sort map according to value
// https://stackoverflow.com/questions/1069666/sorting-javascript-object-by-property-value

let obj = {"you": 100, "me": 75, "foo": 116, "bar": 15};

let entries = Object.entries(obj);
// [["you",100],["me",75],["foo",116],["bar",15]]

let sorted = entries.sort((a, b) => a[1] - b[1]);
// [["bar",15],["me",75],["you",100],["foo",116]]
console.log(sorted);




//for each map entry, get the key and value and then sort the map by value
let map = new Map([["you", 100], ["me", 75], ["foo", 116], ["bar", 15]]);
console.log(map)
console.log([...map.entries()])
let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
console.log(sortedMap); // Map { 'foo' => 116, 'you' => 100, 'me' => 75, 'bar' => 15 }

// iterate over the sorted map
let resultArr = [];
for (let [key, value] of sortedMap) {
    // console.log(key, value);
    resultArr.push(`${key} = ${value}`);
}
console.log(resultArr);




// sort an object by its keys/properties, alphabetically:
const unordered = {
    'b': 'foo',
    'c': 'bar',
    'a': 'baz'
  };
const ordered = Object.keys(unordered).sort().reduce(
    (obj, key) => { 
      obj[key] = unordered[key]; 
      return obj;
    }, 
    {}
);

console.log(ordered);
