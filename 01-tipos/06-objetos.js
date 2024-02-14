//Personaje de TV/Anime
let nombre = "Asta";
let anime = "Black Clover";
let edad = 16;

let personaje = {
    nombre: "Asta",
    anime: "Black Clover",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 15;

let llave = 'edad';
personaje['llave'] = 15;

delete personaje.anime;

console.log();