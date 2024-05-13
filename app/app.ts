import { PokemonServices } from "./services/pokemonServices";
import { abilitiesServices } from "./services/abilitiesServices";
import { movesServices } from "./services/movesServices";
import { typeServices } from "./services/typeServices";

let PokeServices = new PokemonServices()
let SkillsServices = new abilitiesServices()
let MovesServices = new movesServices()
let TypeServices = new typeServices()

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

// MovesServices.getAllMoves().then((moves) => {
//     moves.forEach((move) => {
//         console.log(move)
//     })
// })




