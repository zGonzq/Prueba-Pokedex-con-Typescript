"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pokemonServices_1 = require("./services/pokemonServices");
const abilitiesServices_1 = require("./services/abilitiesServices");
const movesServices_1 = require("./services/movesServices");
let PokeServices = new pokemonServices_1.PokemonServices();
let SkillsServices = new abilitiesServices_1.abilitiesServices();
let MovesServices = new movesServices_1.movesServices();
// let pokemon = new Pokemon()
// const pokemonData = {
//     IDpoke: 834,
//     pokename: "Drednaw",
//     HP: 90,
//     attack: 115,
//     defense: 90,
//     spattack: 48,
//     spdefense: 68,
//     speed: 74,
//     dualtype: 2
// }
// console.log (pokemonData)
// pokemon = Object.assign(pokemon, pokemonData)
// PokeServices.addPokemon(pokemon)
// let id = 6
// PokeServices.getPokemonById(id).then((pokemon: Pokemon) => {
//    console.log(pokemon)
// })
// let name = "Pikachu"
// PokeServices.getPokemonByName(name).then((pokemons: Pokemon[]) => {
//    pokemons.forEach((pokemon) => {
//        console.log(pokemon)
//    })
// })
// SkillsServices.getAllAbilities().then((abilities) => {
//     abilities.forEach((ability) => {
//         console.log(ability)
//     })
// })
MovesServices.getAllMoves().then((moves) => {
    moves.forEach((move) => {
        console.log(move);
    });
});
