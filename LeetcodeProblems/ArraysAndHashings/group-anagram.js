// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// ans = {"aer":["are", "ear", "era"],
//        "abt":["bat","tab"],
//        "ecdo":["code"]
//       },

// //approach1:
// //Maintain a map ans : {String -> List} where each key \text{K}K is a sorted string, and each value is the list of strings from the initial input that when sorted, are equal to \text{K}K.


// //N is the length of strs, and KK is the maximum length of a string in strs. The outer loop has complexity O(N)O(N) as we iterate through each string. Then, we sort each string in O(K \log K)O(KlogK) time.

// var groupAnagrams = function(strs) {
//     let map = new Map();
//     // console.log(strs)
//     if(!strs.length){
//         return [];
//     }
//     groupWords(strs, map);/* Time O(N * (K * log(K)) | Space O(N * K) */
//     return [...map.values()];/* Time O(N)               | Space O(N * K) */

// };

// // group according to sorted string and set map
// const groupWords = (words, map)=>{
//     for(const original of words){
//         const sorted = reorder(original);/* Time O(K * log(K)) | Space O(K) */
//         const values = map.get(sorted) || [];
        
//         values.push(original);
//         map.set(sorted, values);
        
//     }
// }

// // string reorder to form map key
// const reorder = (str) => str
//                 .split("")
//                 .sort((a,b)=>a.localeCompare(b))
//                 .join("")


// transform each string \text{s}s into a character count, \text{count}count, consisting of 26 non-negative integers representing the number of \text{a}a's, \text{b}b's, \text{c}c's, etc. We use these counts as the basis for our hash map.
// hashable representation of our count will be a string delimited with '#' characters

var groupAnagrams = function(strs) {
    let map = new Map();
    if(!strs.length){
        return [];
    }
    
    groupWords(strs, map);/* Time O(N * K) | Space O(N * K) */
    
    return [...map.values()];/* Time O(N)     | Space O(N * K) */

};


const groupWords = (words, map)=>{
    for(const original of words){/* Time O(N) */
        const hash = getHash(original);/* Time O(K) | Space O(1) */
        const values = map.get(hash) || [];
        
        values.push(original);
        map.set(hash, values);
        
    }
}

const getHash = (word) =>{
    const frequency = new Array(26).fill(0);
    
    for(const char of word){/* Time O(K) */
        const charCode = getCode(char);
        frequency[charCode]++;
    }
    
    //use frequency array to build hash
    buildHash(frequency);
}

//transform a-z to 0-25
const getCode = (char)=>char.charCodeAt(0)- 'a'.charCodeAt(0);

const buildHash = (frequency)=>{
    frequency.map((count)=>`#${count}`).join("");
}
