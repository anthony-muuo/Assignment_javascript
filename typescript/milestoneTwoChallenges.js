// Challenges One: sum of positive numbers
function sumOfPositives(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }
    return sum;
}
// console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));
// Challenge Two: Find Maximum Value
function findMax(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max)
            max = array[i];
    }
    return max;
}
function findWinner(array) {
    var winner = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i].votes > winner.votes) {
            winner = array[i];
        }
    }
    return winner;
}
var candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 },
];
console.log(findWinner(candidates));
