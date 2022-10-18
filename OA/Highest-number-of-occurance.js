// Given an array of integers a, your task is to calculate the digits that occur the most number of times in the array. Return the array of these digits in ascending order.

// For a = [25, 2, 3, 57, 38, 41], the output should be solution(a) = [2, 3, 5].

// Here are the number of times each digit appears in the array:

// 0 -> 0
// 1 -> 1
// 2 -> 2
// 3 -> 2
// 4 -> 1
// 5 -> 2
// 6 -> 0
// 7 -> 1
// 8 -> 1
// The most number of times any number occurs in the array is 2, and the digits which appear 2 times are 2, 3 and 5. So the answer is [2, 3, 5].


function solution(a){

    // console.log(a);
    let digitArr = a.join("").split("")
    digitArr = digitArr.map((item)=>Number.parseInt(item))
	console.log(digitArr)
	
    let map = new Map();
    for(let i=0; i<digitArr.length; i++){
        // console.log(digitArr[i])
        if(map.has(digitArr[i])){
            // console.log(digitArr[i])
            let occur = map.get(digitArr[i]);
            map.set(digitArr[i], occur+1);
        }else{
            map.set(digitArr[i], 1);
        }
	}
    console.log(map)


    let result = [];
    map.forEach((value, key) => {
        
        // higest occurance
        if (value === Math.max(...map.values())) {
            result.push(key);
        }
    })
    console.log(result)
    
    
}

solution([25, 2, 3, 57, 38, 41])
solution([1,2,3,4,5,5])