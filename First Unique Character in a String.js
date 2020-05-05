/**
* First Unique Character in a String
*
* Original Link
* https://leetcode.com/problems/first-unique-character-in-a-string/
* 
* Leet Code Question Link
* https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3320/
* 
* 05/May/2020
*/

/**
* @param {string} s
* @return {number}
*/
var firstUniqChar = function (s) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (map[c]) map[c] = map[c] + 1
        else map[c] = 1
    }

    for (let i = 0; i < s.length; i++) {
        let c = s[i]

        if (map[c] === 1) return i
    }
    return -1;
};