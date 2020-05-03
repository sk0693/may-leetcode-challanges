/**
 * Ransom Note
 * 
 * Original Link
 * https://leetcode.com/problems/ransom-note/
 * 
 * Leet Code Question Link
 * https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3318/
 * 
 * 03/May/2020
 */


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    if(ransomNote.length > magazine.length)
        return false;
    
    let m_arr = magazine.split('');
    
    for(let i of ransomNote) {
        let index = m_arr.indexOf(i);
        if(index > -1) 
            m_arr[index] = '';
        else
            return false;
    }
    
    return true;
};