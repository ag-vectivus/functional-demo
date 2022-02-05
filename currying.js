// Problem
function multiply(value) {
  return value * 2;
}

const numbers = [44, 3, 84, 23];

numbers.map(number => multiply(number, 2));

// Partial Application
const double = multiply.bind(2);
console.log(double(5));
console.log(numbers.map(double));

// Unary functions
const unary = (x) => console.log(x);
const binary = (x, y) => x + y;

// What is Currying
const unaryCurrying = (x) => (y) => x + y;
console.log(unaryCurrying(1));
console.log(unaryCurrying(1)(2));

const unaryFunc = function (x) {
  return function (y) {
    return x + y;
  }
}
