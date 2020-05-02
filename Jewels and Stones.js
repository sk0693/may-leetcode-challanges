/**
 * Jewels and Stones
 * Question Link
 * https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3317/
 * 
 * 02/May/2020
 */

 
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let hash = {}
    for(i of S) {
        if(!hash.hasOwnProperty(i)) {
            hash[i] = 0;
        }
        hash[i] = ++hash[i];
    }
        
    count = 0;
    for(i of J) {
        if(hash.hasOwnProperty(i)) {
            count += hash[i];
        }
    }
    
    return count;
};