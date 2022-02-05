// const value = 5;

// const doubleAndIncrement = x => x * 2 + 1;
// console.log(doubleAndIncrement(value));

// const double = y => y * 2;
// const add = x => x + 1;

// console.log(double(5));
// console.log(add(5));

// console.log(add(double(value)));

// const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

// const result = compose(add, double);
// console.log(result(value));

const bookshelf = [
  {title: 'Total Recall', pages: 656, genre: 'biography'},
  {title: 'Stillness Is the Key', pages: 288, genre: 'philosophy'},
  {title: 'Creativity, Inc.', pages: 368, genre: 'business'},
  {title: 'Sapiens', pages: 498, genre: 'nonfiction'},
  {title: 'Do the work', pages: 114, genre: 'nonfiction'},
  {title: 'Outliners', pages: 309, genre: 'business'},
  {title: 'MAKE: Bootstrappers Handbook', pages: 194, genre: 'business'},
];

// filter to left business category only
// left only pages property
// reduce given values

const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const getBusiness = (list) => list.filter((book) => book.genre === 'business');
const getPages = (list) => list.map(({pages}) => pages);
const countPages = (book) => book.reduce((acc, pages) => acc + pages);

// const business = compose(countPages, getPages, getBusiness);
// const total = compose(countPages, getPages);
// console.log(business(bookshelf));
// console.log(total(bookshelf));

console.log(compose(countPages, getPages, getBusiness)(bookshelf));
console.log(compose(countPages, getPages)(bookshelf));