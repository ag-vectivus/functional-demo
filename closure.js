// function outer() {
//   const outsideScopeVar = 'Get out!';

//   function inner() {
//     debugger
//     return outsideScopeVar;
//   }

//   return inner;
// }

// const closure = outer();
// console.log(closure());

// 

// const init = () => {
//   let counter = 0;

//   return {
//     add() {
//       return counter += 1;
//     }
//   }
// }

// const calculator = init();
// console.log(calculator.add());
// console.log(calculator.add());

//

// const display = document.querySelector('.js-display');
// const btn = document.querySelector('.js-count');
// let counter = 0;

// btn.addEventListener('click', () => {
//   counter += 1;
//   display.textContent = counter;
// })


// design pattern - enkapsulacja danych !!!
// const btn = document.querySelector('.js-count');

// const init = () => {
//   const display = document.querySelector('.js-display');
//   let counter = 0;

//   return () => {
//     counter += 1;
//     display.textContent = counter;
//   }
// }

// const count = init();
// btn.addEventListener('click', count);


// state
const createState = (initialValue) => {
  let current = initialValue;

  const update = (newValue) => {
    current = newValue;
  }

  const get = () => current;

  return [get, update];
};

const [state, setState] = createState();
console.log(state());
setState(123);
state(); /*?*/
