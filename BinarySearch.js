'use strict';
const Queue = require('./Queue');
const BinarySearchTree = require('./BST');

function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}

let array1 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
 
console.log(binarySearch(array1, 16 ));

// the sequence of  for 8 through a binary search;
// 3 , 18
// 3 11 
// 6 11 
// 8

// the sequence of  for 16 through a binary search;
//  3 18
//  14 18
//  14 15
//  15 15
//  then states its not here