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
console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));
