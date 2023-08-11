var loadPokemon = (id, cb) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      cb();
    });
};

loadPokemon(78, (pokemon) => {
  console.log(pokemon);
});

// CallBack Functions are: 1. forEach(), 2.filer(), 3.map(),....every iteratble methods...
