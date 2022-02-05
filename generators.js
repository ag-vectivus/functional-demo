// function moviesSequence() {
//   console.log('Gone in 60 seconds');
//   console.log('Peaceful Warrior');
//   console.log('Matrix');
// }

// moviesSequence();

function* moviesSequence() {
  // console.log('Gone in 60 seconds');
  // console.log('Peaceful Warrior');
  // console.log('Matrix');
  yield 'Gone in 60 seconds';
  yield 'Peaceful Warrior';
  yield 'Matrix';
}

const movieGen = moviesSequence();

// for(let movie of movieGen) {
//   console.log(movie);
// }

console.log(movieGen.next());
console.log(movieGen.next());
console.log(movieGen.next());
console.log(movieGen.next());

function* anotherGen() {
  const movie1 = yield 'Matrix';
  console.log(movie1);
}

const anotherMovieGen = anotherGen();
const movie = anotherMovieGen.next();
console.log(movie);
anotherMovieGen.next("lol");
