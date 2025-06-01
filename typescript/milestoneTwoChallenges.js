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
// console.log(findWinner(candidates));
// Challenge 4: longest word
function findLongestWord(array) {
    var longest = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > array.length) {
            longest = array[i];
        }
    }
    return longest;
}
// console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));
// Challenge 5: count properties
function countProperties(object) {
    return Object.keys(object).length;
}
// console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));
function filterByLength(array, minlength) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length >= minlength) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
// console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));
// Challenge 7: sum of even function
function sumEvenNumbers(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
// Challenge 8: difference between sum and odd numbers
function differenceEvenOdd(array) {
    var evenNum = 0;
    var oddNum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNum += array[i];
        }
        else {
            oddNum += array[i];
        }
    }
    var difference = evenNum - oddNum;
    return difference;
}
// console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));
// challenge 9: count truthy
function countTruthy(object) {
    var count = 0;
    for (var key in object) {
        if (object[key]) {
            count++;
        }
    }
    return count;
}
// console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));
// challenge 10: average of numbers
function average(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    if (array.length === 0) {
        return 0;
    }
    var average = sum / array.length;
    return average;
}
console.log(average([1, 2, 3]));
