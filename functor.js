// Funktor: kontener zawierający wartości i umożliwiający mapowanie po nich (np. tablica), dwie zasady: 
// 1. Identity - Musi posiadać taką samą strukturę jak oryginał, jest to kopia, a nie referencja. 
// 2. Composition - zwrócone wartości muszą być takie same jeśli będzie zastosowany chaining zamiast kompozycji;

const container = [1, 2, 3, 4, 5];
const double = value => value * 2;

console.log(container);

// RULE #1: Identity
const notModifiedcontainer = container.map(value => value);
console.log(notModifiedcontainer);
console.log(container);

console.log(notModifiedcontainer === container);

// RULE #2: Composition
const triple = x => x * 3;
const add2 = x => x + 2;

const composition = container.map((x) => triple(add2(x)));
console.log(composition);

const chaining = container
                  .map(add2)
                  .map(triple);
console.log(chaining);

// Create Functor
const Functor = (x) => ({
  map: (fn) => Functor(fn(x)),
  valueOf: () => x
});

const number = Functor(5);
console.log(number.map(double).map(add2).valueOf());