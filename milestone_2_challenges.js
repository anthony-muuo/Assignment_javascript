// Challenges One: sum of positive numbers

function sumOfPositives(array) {
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

function findMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
}
// console.log(findMax([3, 7, 2, 9, 5]));

//Challenge Three: Election Winner
function findWinner(array) {
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

function findLongestWord(array) {
  let longest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > array.length) {
      longest = array[i];
    }
  }
  return longest;
}
console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));
