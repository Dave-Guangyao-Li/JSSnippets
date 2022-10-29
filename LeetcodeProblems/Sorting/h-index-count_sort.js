// https://leetcode.com/problems/h-index/


/**
 * @param {number[]} citations
 * @return {number}
 */

// Any citation larger than nn can be replaced by nn and the h-index will not change after the replacement.The reason is that hh-index is upper bounded by total number of papers n

// After we have the counts, we can get a sorted citations by traversing the counts array

// The idea is that we don't even need to get sorted citations. We can find the h-index by using the paper counts directly.


// Time On space On we traverse the citations array once and only once. The second part of finding the hh-index is also O(n)O(n) since we traverse the papers array at most once.We use O(n) auxiliary space to store the counts.

var hIndex = function(citations) {
    // console.log(citations)
    let n = citations.length;
    let papers = new Array(n+1).fill(0);//store count array. start with all 0
    // console.log(papers)
    // counting papers for each citation number, replace number> total papers with length of total papers
    for(let c of citations){
        // console.log(c)
        // count list of each paper
        papers[Math.min(n, c)]++ ;
    }
    // console.log(papers)
    //finding the h-index
    let k = n;
    // s is the sum of all counts with citation >= k
    for(let s=papers[n]; k>s; s+=papers[k]){
        k--; // update h-index
    }
    return k;//he largest k with k <= s is our answer
};