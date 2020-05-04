/**
 * Number Complement
 * 
 * Original Link
 * https://leetcode.com/problems/number-complement/
 * 
 * Leet Code Question Link
 * https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3319/
 * 
 * 04/May/2020
 */


/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let mask = Math.pow(2, num.toString(2).length) - 1;
    return ~num & mask;
};