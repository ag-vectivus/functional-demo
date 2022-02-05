// Inheritance (czym są dane obiekty)
class Media {
  record() {}
  share() {}
}

class Movie extends Media {
  watch() {}
}

class Podcast extends Media {
  listen() {}
}

class Resource {
  share() {}
}

class Newsletter extends Resource {
  write() {}
  read() {}
}

class Snippet extends Resource {
  gather() {}
}

// Composition (co mogą robić dane obiekty)

const recordable = (state) => ({
  record: () => `I'm recording a new ${state.type}`,
});

const shareable = (state) => ({
  share: () => `Spread a word about ${state.name}`,
});

const watchable = (state) => ({
  watch: () => `I'm watching right now: ${state.name} 👀`,
});

const movie = (name) => { // Factory
  const state = {name, type: 'movie'};

  // return Object.assign({}, recordable(state), shareable(state), watchable(state));
  return Object.assign(state, recordable(state), shareable(state), watchable(state));
}

const latestMovie = movie('Kompozycja vs. Dziedziczenie');
console.log(latestMovie.record());
console.log(latestMovie.share());
console.log(latestMovie.watch());
console.log(latestMovie.name);
console.log(latestMovie.type);

