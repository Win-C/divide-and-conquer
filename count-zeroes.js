"use strict";


/** Given an array of 1s and 0s which has all 1s first followed
 *  by all 0s, returns the number of zeroes im the array.
 *  
 *  Time Complexity: O(logN) where N is the length of the array.
 */

// TODO: Refactor using helper function and recursion
function countZeroes(arr) {
  let right = arr.length-1;
  let left = 0;
  let foundOne = false;
  
  if (arr.length === 0) return 0;

  while (left <= right){
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === 1){
      foundOne = true;
      if(arr[mid + 1] === 0){
        return arr.length - (mid + 1);
      } else {
        left = ++mid;
      }
    } else if (arr[mid] === 0){
      if(arr[mid - 1] === 1){
        return arr.length - mid;
      } else {
        right = --mid;
      }
    }
  }

  return foundOne? 0: arr.length;
}

module.exports = countZeroes