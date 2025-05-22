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
console.log(findMax([3, 7, 2, 9, 5]));
