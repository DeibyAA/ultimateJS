let user = {
    id: 1,
    name: 'cutrepez81',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['perro', 'gato', 'dragon'];
for (let indice in animales){
    console.log(indice, animales [indice]);
}