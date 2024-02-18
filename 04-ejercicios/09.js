let pairs = [
    [1, { name: "Nicolas" }],
    [2, { name: "Felipe" }],
    [3, { name: "Ultimate" }],
];

let array = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Ultimate',
}];

let pares = [
    [1, { id: 1, name: "Nicolas" }],
    [2, { id: 2, name: "Felipe" }],
    [3, { id: 3, name: "Ultimate" }],
];   

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemeto = arr[idx];
        collection[idx] = elemeto[1];
        collection[idx].id =elemeto[0];
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);