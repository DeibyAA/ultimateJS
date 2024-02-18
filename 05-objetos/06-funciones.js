function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario
let user = new U('Deiby');

console.log(user);

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Sweet');
console.log(user1);

function returned() {
    return function() {
        console.log('hello world');
    }   
}

let saludo = returned();
saludo();