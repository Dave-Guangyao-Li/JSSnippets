
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter


//  Rule 1: If one or more symbols are placed after another letter of greater value, add that amount.
// VII = 7 (5 + 2 = 7)
// LXXX = 80 (50 + 10 + 10 + 10 = 80)
// MCCC = 1300 (1000+100 + 100 + 100 = 1300)

// Rule 2: If a symbol is placed before another letter of greater value, subtract that amount.

// CM = 900 (1000 – 100 = 900)
// IX = 9 ( 10 – 1 = 9 )
// XC = 90 (100 – 10 = 90)

// 4 and 9 special cases

function convertToRoman(num) {
    //  console.log(num);
    
      const numerals = {
        'M':1000,
        'CM':900,
        'D':500,
        'CD':400,
        'C':100,
        'XC':90,
        'L':50,
        'XL':40,
        'X':10,
        'IX':9,
        'V':5,
        'IV':4,
        'I':1
      }
      let table = new Map(Object.entries(numerals));
      let ans = ""
      table.forEach((value, key)=>
        {
          while(num>=value){
            console.log(value)
            ans += key; // concatenate answer string
            num -= value; //update num
          }
        })
        console.log(ans)
      return ans
      
    }
    
    
    
    convertToRoman(899);