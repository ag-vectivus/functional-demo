function fibonacci(n) {
  if (n <= 1) {
    return 1
  }

  return (fibonacci(n - 1) + fibonacci(n - 2));
}


function memoizer(fun) {
  let cache = {}

  return function(n) {
    if (cache[n] != undefined ) {
      return cache[n]
    } else {
      let result = fun(n)
      cache[n] = result

      return result
    }
  }
}

const twenty = fibonacci();
const fibonacciMemoFunction = memoizer();

console.log(fibonacciMemoFunction(fibonacci()));
