const songs = [
  { name: "Carry on Wayward Son", duration: 322, released: 1976 },
  { name: "Back in Black", duration: 231, released: 1980 },
  { name: "Cold as Ice", duration: 201, released: 1977 },
  { name: "Eye of the tiger", duration: 246, released: 1982 },
];

// Classic approach
// function getLongest(songs) {
//   let result = songs[0];
//   for (let i = 1, {length} = songs; i < length; i++) {
//     if (result.duration < songs[i].duration) result = songs[i]
//   }
//   return result
// }

// const longestSong = getLongest(songs)
// longestSong

// function getShortest(songs) {
//   let result = songs[0];
//   for (let i = 1, {length} = songs; i < length; i++) {
//     if (result.duration > songs[i].duration) result = songs[i]
//   }
//   return result
// }

// const shortestSong = getShortest(songs)
// shortestSong



// Imperative
// const reduce = (reducer, initial, arr) => {
//   let result = initial
//   for (let i = 0, { length } = arr; i < length; i++) {
//     result = reducer(result, arr[i]) ? result : arr[i]
//   }
//   return result
// }

// const filter = (reducer, arr) => reduce(reducer, [], arr)
// const shortest = filter((prev, next) => prev.duration < next.duration, songs)
// const longest = filter((prev, next) => prev.duration > next.duration, songs)
// const oldest = filter((prev, next) => prev.released < next.released, songs)
// const latest = filter((prev, next) => prev.released > next.released, songs)

const shortestReducer = (prev, next) => prev.duration < next.duration ? prev : next;
const shortest = songs.reduce(shortestReducer, songs);

console.log(shortest);