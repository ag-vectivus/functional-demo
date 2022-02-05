// const multiply = (x, y) => x * y;
// multiply(5, 2);

const multiply = function(x) {
  return function(y) {
    return (x * y);
  }
}

const double = multiply(2);
double(5);
const value = double(5);
console.log(value);
