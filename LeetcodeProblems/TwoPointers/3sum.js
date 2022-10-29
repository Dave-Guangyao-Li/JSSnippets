// https://leetcode.com/problems/3sum/
// https://github.com/neetcode-gh/leetcode/blob/main/javascript/15-3Sum.js

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// main function + twosumII function

// 3sum -> sort -> check duplicate of current left and right -> reduce to sorted 2sum
// time O(nlogn + On^2) space depend on sorting library could be O1 or On
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    console.log(nums);
    let res = [];
    
    for(let i=0; i<nums.length; i++){
        //If the current value is greater than zero, break from the loop. Remaining values cannot sum to zero.
        if(nums[i] >0){
            break;
        }
        // If the current value is the same as the one before, skip it.
        if(i===0 || nums[i-1] !== nums[i]){
            twoSum(nums, i, res);
        }
    }
    return res;
};


var twoSum = function(numbers, i, result) {
    //Set the low pointer lo to i + 1, and high pointer hi to the last index.
    // i l r three sum
    let l = i+1;
    let r = numbers.length-1;
    
      while (l<r) {
        let sum = numbers[i]+numbers[l]+numbers[r];
        if(sum < 0){
            l++;
        }else if(sum > 0){
            r--;
        }else{
            result.push([numbers[i], numbers[l], numbers[r]]);
            l+=1;
            r-=1;
            // Increment lo while the next value is the same as before to avoid duplicates in the result.
            while( l<r && numbers[l] === numbers[l-1]){
                l+=1;
            }
        }
      }
};