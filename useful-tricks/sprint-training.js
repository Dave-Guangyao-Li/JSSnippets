// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }



/*
 * Complete the 'getMostVisited' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY sprints
 */

function getMostVisited(n, sprints) {
    // Write your code here
    console.log(sprints)
    let ans = 0;
    let map = new Map();
    for(let i=1; i<sprints.length; i++){
        //count passing
        let j = i-1;
        // let [l, r] = [j, i];
        // console.log(sprints[l], sprints[r])
        let interval = [sprints[j],sprints[i]].sort((a,b)=>a-b);
        console.log(interval)
        for(let k=interval[0]; k<=interval[1]; k++){
            if(map.has(k)){
                let cur = map.get(k)
                map.set(k, cur+1)
            }else{
                map.set(k, 1)
            }
        }
        
    }
    console.log(map)
    let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    // sortedMap = new Map([...map.entries()].sort((a, b) => a[0] - b[0]));
    console.log(sortedMap)
    

    // only save the min posittion number when value is the same
    let map1 = new Map([...sortedMap].filter(([k,v])=>v===sortedMap.values().next().value))
    
    //Convert the map into an array of [key, value] pairs.
    console.log("map1", [...map1])


    let position = Math.min(...map1.keys())
    console.log(position)
    // let positionIter = sortedMap.keys();
    // let keysArr = [...positionIter];
    // console.log(keysArr)
    

    // console.log(positionIter.next().value)
    // ans = positionIter.next().value
    ans = position
    console.log(ans)
    return ans;

}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine().trim(), 10);

//     const sprintsCount = parseInt(readLine().trim(), 10);

//     let sprints = [];

//     for (let i = 0; i < sprintsCount; i++) {
//         const sprintsItem = parseInt(readLine().trim(), 10);
//         sprints.push(sprintsItem);
//     }

//     const result = getMostVisited(n, sprints);

//     ws.write(result + '\n');

//     ws.end();
// }


getMostVisited(10, [4, 1, 5, 10]);