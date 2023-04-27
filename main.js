import Pokemon from "./Pokemon.js";
import adatBeolvas from "./hivasok.js";
$(function () {


  let vegpont = "https://pokeapi.co/api/v2/pokemon/ditto";
  adatBeolvas(vegpont, megjelenit);
});


function megjelenit(data) {
  let szuloelem = $(".tarolo");
  console.log(data);
  let obj ={
    eleresiUt:data.sprites.front_default,
    pokemonNeve:data.name
  }
  const poki = new Pokemon(obj, szuloelem);
}
