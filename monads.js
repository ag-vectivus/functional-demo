// Functions map a -> b
const double = (x) => x * 2;
double(5); // 5 -> 10

// Functors map with Context
const Functor = (x) => ({
  map: (fn) => Functor(fn(x)),
  valueOf: () => x,
  inspect: () => `Functor(${x})`,
});

console.log(Functor(5).map(double).valueOf());

// Monada to Funktor, która poza mapowaniem daje większe możliwości - w funktorze najważniejsza jest metoda: map, w monadzie: flatMap;

console.log([1, 2, 3, 4].map((x) => [x * 2]));
console.log([1, 2, 3, 4].flatMap((x) => [x * 2]));

const promise = new Promise((res) => setTimeout(() => res('done'), 500));
promise.then((data) => {console.log(data)});

// Monad(Monad(a)) -> Monad(b) = flatMap'

const Just = (x) => ({
  // sprawdza czy wartość istnieje
  map: (fn) => Just(fn(x)),
  flatMap: (fn) => fn(x),
  valueOf: () => x,
  inspect: () => `Just(${x})`,
  type: 'just',
})

const Nothing = () => ({
  map: (fn) => Nothing(fn()),
  flatMap: (fn) => fn(),
  valueOf: () => x,
  inspect: () => `Nothing`,
  type: 'nothing',
})

const MaybeOf = (x) => (x === null || x === undefined || x.type === 'nothing' ? Nothing() : Just(x));

const Maybe = {
  of: MaybeOf,
}

const fahrenheitToCelsius = (a) => (a - 32) * 0.5556;

const sensor1 = 15;
const sensor2 = null;

console.log(fahrenheitToCelsius(sensor1));
console.log(fahrenheitToCelsius(sensor2));

const temp1C = Maybe.of(sensor1).map(fahrenheitToCelsius).inspect();
console.log(temp1C);
const temp2C = Maybe.of(sensor2).map(fahrenheitToCelsius).map(double).inspect();
console.log(temp2C);