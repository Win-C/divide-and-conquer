"use strict";

/** Given a sorted array and a number, returns the count of the 
 *  occurrences of the number in the array.
 * 
 *  Time complexity: O(logN) where N is the length of the array.
 */
function sortedFrequency(arr, num) {
  let firstOccurrence = findFirst(arr, num);
  let lastOccurrence = findLast(arr, num);
  // console.log("firstOccurrence = ", firstOccurrence);
  // console.log("lastOccurrence = ", lastOccurrence);

  if (firstOccurrence === -1) return -1;
  
  if (lastOccurrence === -1) return arr.length - firstOccurrence;
  
  return lastOccurrence - firstOccurrence + 1;
}

/** Helper function to find first occurrence of num in arr */
function findFirst(arr, num, low = 0, high = arr.length - 1) {
  if (low <= high) {
    let mid = Math.floor((high - low) / 2);
    if ((mid === 0 || arr[mid - 1] !== num) && arr[mid] === num){
      return mid;
    } else if (arr[mid] < num){
      return findFirst(arr, num, mid + 1, high);
    } else {
      return findFirst(arr, num, low, mid - 1);
    }
  }
  return -1;
}

/** Helper function to find last occurrence of num in arr */
function findLast(arr, num, low = 0, high = arr.length - 1) {
  if (low <= high){
    let mid = Math.floor((high - low) / 2);
    if((mid === arr.length - 1 || arr[mid + 1] !== num) && arr[mid] === num){
      return mid;
    } else if (arr[mid] <= num){
      return findLast(arr, num, mid + 1, high);
    } else {
      return findLast(arr, num, low, mid - 1);
    }
  }
  return -1;
}
module.exports = sortedFrequency