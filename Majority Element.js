/**
 * Majority Element
 * 
 * Original Link
 * https://leetcode.com/problems/majority-element/
 * 
 * Leet Code Question Link
 * https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3321/
 * 
 * 04/May/2020
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = ++map[nums[i]] || 1;
    }

    let count = 0;
    let major = 0;
    for (let i in map) {
        if (map[i] > count) {
            count = map[i];
            major = i;
        }
    }

    return major;
}