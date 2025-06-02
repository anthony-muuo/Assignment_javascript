// Challenges One: sum of positive numbers

function sumOfPositives(array: number[]) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  return sum;
}
// console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));

// Challenge Two: Find Maximum Value

function findMax(array: number[]) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
}
// //Challenge Three: Election Winner

type Canditate = {
  name: string;
  votes: number;
};

function findWinner(array: Canditate[]) {
  let winner = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].votes > winner.votes) {
      winner = array[i];
    }
  }
  return winner;
}
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 },
];

// console.log(findWinner(candidates));
// Challenge 4: longest word

function findLongestWord(array: string[]) {
  let longest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > array.length) {
      longest = array[i];
    }
  }
  return longest;
}
// console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));

// Challenge 5: count properties
function countProperties(object: Object) {
  return Object.keys(object).length;
}
// console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));

function filterByLength(array: string[], minlength: number) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= minlength) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
// console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));
// Challenge 7: sum of even function

function sumEvenNumbers(array: number[]) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}

// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

// Challenge 8: difference between sum and odd numbers

function differenceEvenOdd(array: number[]) {
  let evenNum = 0;
  let oddNum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNum += array[i];
    } else {
      oddNum += array[i];
    }
  }
  let difference = evenNum - oddNum;
  return difference;
}
// console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));
// challenge 9: count truthy

function countTruthy(object: { [key: string]: unknown }) {
  let count = 0;
  for (let key in object) {
    if (object[key]) {
      count++;
    }
  }
  return count;
}
// console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));
// challenge 10: average of numbers

function average(array: number[]) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (array.length === 0) {
    return 0;
  }
  let average = sum / array.length;
  return average;
}
// console.log(average([1, 2, 3]));
// challenge 11: linear search

function linearSearch(array: number[], value: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch([5, 3, 7, 1, 4], 7));
// challenge 12: reverse linear search

function reverseLinearSearch(array: number[], value: number) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
// console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));
// challenge 13: linear Search All Indexes

function linearSearchAll(array: number[], value: number) {
  let newLinearArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      newLinearArray.push(i);
    }
  }
  return newLinearArray;
}
// console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7));

// challenge 14: count occurrence

function countOccurrences(array: string[]) {
  let obj: { [key: string]: number } = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }
  return obj;
}

// console.log(
//   countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])
// );
// challenge 15: remove duplicates

function removeDuplicates(array: number[]) {
  let newArray: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));
