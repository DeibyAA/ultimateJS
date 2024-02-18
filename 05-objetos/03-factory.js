function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
        console. log('recuperando clave...');
        },
    };
}

let user1 = crear = crearUsuario('Deiby', 'cutrepez81@gmail.com');
let user2 = crear = crearUsuario('sweet', 'cutrepez82@gmail.com');
let user3 = crear = crearUsuario('pain', 'cutrepez83@gmail.com');

console.log(user1, user2, user3);