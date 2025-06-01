//challenge one : sum of two numbers

function addition(num1: number, num2: number) {
  return num1 + num2;
}

// console.log(addition(3, 4));

//convert minutes to seconds
function convert(minutes: number) {
  //1 minute equals to 60seconds
  return minutes * 60;
}
//Challenge 3: Perimeter of A Rectangle

//perimeter of a rectangle = 2(length * width) or length+width+length+width

function perimeterOfRectangle(length: number, width: number) {
  return 2 * (length + width);
}
//Challenge 4: Return Boolean if returned number is Negative

function isNegative(number: number) {
  if (number < 0) {
    return true;
  } else {
    return false;
  }
}
// challenge 5: can i drive

function canDrive(name: string, age: number) {
  return age >= 18
    ? `${name} is old enough to drive`
    : `${name} is not old enough to drive yet`;
}
function findLargest(a: number, b: number, c: number) {
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
//Challenge 7: Bmi Calculation

function calculateBMI(weight: number, height: number) {
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
//challenge Eight: Greet user According to hour

function greetUser(name: string, hour: number) {
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
//Challenge Nine: FizzBuzz

function fizzBuzzCheck(number: number) {
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
// Challenge 10: Perimeter 2

function eitherPerimeterOfCircleOrSquare(
  l: "s" | "c",
  num: number
): number | string {
  if (l === "s") {
    return 4 * num;
  }
  if (l === "c") {
    return 6.28 * num;
  } else {
    return `first paramater should either be an s or c to define square or circle`;
  }
}
// challenge 11: sum of even numbers

function sumEvenNumbers(n: number) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

// challenge 12: multiple by itself
function powerUp(num: number, times: number) {
  let multipleTimes = 1;
  for (let i = 0; i < times; i++) {
    multipleTimes *= num;
  }
  return multipleTimes;
}
//challenge 13: Factorial Number

function factorial(n: number) {
  let startPoint = 1;
  for (let i = 1; i <= n; i++) {
    startPoint *= i;
  }
  return startPoint;
}

//Challenge 14: multiple sum

function sumMultiples(num: number, divisor: number) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % divisor === 0) {
      sum += i;
    }
  }
  return sum;
}
//Challenge 15: sum of Digits

function sumDigits(num: number) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
