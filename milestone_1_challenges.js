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

// challenge 5: can i drive

function canDrive(name, age) {
  return age >= 18
    ? `${name} is old enough to drive`
    : `${name} is not old enough to drive yet`;
}
console.log(canDrive("Jane", 22));
console.log(canDrive("June", 12));

//Challenge 6: Largest Number

function findLargest(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else {
    return a;
  }
}
console.log(findLargest(5, 9, 3));
console.log(findLargest(10, 10, 10));
console.log(findLargest(-1, -5, -3));

//Challenge 7: Bmi Calculation

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal Weight";
  } else if (bmi >= 25 && bmi < 30) {
    return "Over Weight";
  } else {
    return "Obese";
  }
}
console.log(calculateBMI(68, 1.75));
console.log(calculateBMI(85, 1.8));

//challenge Eight: Greet user According to hour

function greetUser(name, hour) {
  //convert hour to number
  const hourInNumber = Number(hour);
  if (hourInNumber >= 24 || isNaN(hourInNumber) || hourInNumber < 0) {
    return "Hours should be between 0 and 23, just like a real clock";
  } else if (hourInNumber >= 5 && hourInNumber < 12) {
    return `Good morning, ${name}!`;
  } else if (hourInNumber >= 12 && hourInNumber < 18) {
    return `Good afternoon, ${name}!`;
  } else if (hourInNumber >= 18 && hourInNumber < 22) {
    return `Good evening ${name}!`;
  } else {
    return `Good night, ${name}!`;
  }
}
console.log(greetUser("anthony", 300));
console.log(greetUser("anthony", "hello"));
console.log(greetUser("ducci", "10"));
console.log(greetUser("ducci", -1));

//Challenge Nine: FizzBuzz

function fizzBuzzCheck(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
}
console.log(fizzBuzzCheck(3));
console.log(fizzBuzzCheck(10));
console.log(fizzBuzzCheck(15));
console.log(fizzBuzzCheck(7));

// Challenge 10: Perimeter 2

function eitherPerimeterOfCircleOrSquare(l, num) {
  if (l === "s") {
    return 4 * num;
  }
  if (l === "c") {
    return 6.28 * num;
  } else {
    return `first paramater should either be an s or c to define square or circle`;
  }
}
console.log(eitherPerimeterOfCircleOrSquare("s", 7));
console.log(eitherPerimeterOfCircleOrSquare("c", 4));

// challenge 11: sum of even numbers

function sumEvenNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumEvenNumbers(6));
console.log(sumEvenNumbers(10));

// challenge 12: multiple by itself
function powerUp(num, times) {
  let multipleTimes = 1;
  for (let i = 0; i < times; i++) {
    multipleTimes *= num;
  }
  return multipleTimes;
}
console.log(powerUp(2, 3));
console.log(powerUp(5, 0));
console.log(powerUp(0));

//challenge 13: Factorial Number

function factorial(n) {
  let startPoint = 1;
  for (let i = 1; i <= n; i++) {
    startPoint *= i;
  }
  return startPoint;
}

console.log(factorial(6));
