// Challenge 1: Sum of two numbers

const addition = (num1, num2) => {
  return num1 + num2;
};
console.log(addition(5, 3));
console.log(addition(-6, 9));

//Challenge 2: Convert minutes to Seconds

function convert(minutes) {
  //1 minute equals to 60seconds
  return minutes * 60;
}
console.log(convert(5));
console.log(convert(2));

//Challenge 3: Perimeter of A Rectangle

//perimeter of a rectangle = 2(length * width) or length+width+length+width

function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}
console.log(perimeterOfRectangle(6, 7));
console.log(perimeterOfRectangle(20, 10));

//Challenge 4: Return Boolean if returned number is Negative

function isNegative(number) {
  if (number < 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isNegative(-23));
console.log(isNegative(55));
