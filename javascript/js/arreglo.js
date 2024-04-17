/*
let carrito=[
    "leche",1,
    "carne",2,
    "papa",3,
    "fideos",1];
console.log("Item: " + carrito [0]);
console.log("Cantidad: " + carrito [1]);
console.log("Item: " + carrito [2]);
console.log("Cantidad: " + carrito [3]);
console.log("Item: " + carrito [4]);
console.log("Cantidad: " + carrito [5]);
console.log("Item: " + carrito [6]);
console.log("Cantidad: " + carrito [7]);

carrito.push("pan", 5);

console.log("IMPRESION COMPLETA")
console.log(carrito);
*/

/*let item = {name: 'Leche', quantity: 1};
console.log("Item: "+ item.nombre);
console.log("Cantidad: " + item.cantidad)
*/
/*let carrito=[
    {nombre: 'Leche',cantidad:1, precio: 6},
    {nombre: 'Carne',cantidad:2, precio: 16},
    {nombre: 'Fideo',cantidad:1, precio: 5},
    {nombre: 'Papa',cantidad:3, precio: 6}];
console.log(carrito);

item = {name: "Arroz", quantity: 3}

carrito.push(item);


console.log(carrito);
*/

let item = {name: 'Leche', cantidad: 2, precio: 7};
console.log("Item: "+ item.nombre);
console.log("Cantidad: " + item.cantidad)
console.log("Precio: " + item.precio+" Bs");
console.log("Total: " + item.cantidad * item.precio + " Bs" );

let carrito=[
    {nombre: 'Leche',cantidad:1, precio: 6},
    {nombre: 'Carne',cantidad:2, precio: 16},
    {nombre: 'Fideo',cantidad:1, precio: 5},
    {nombre: 'Papa',cantidad:3, precio: 6}];

item = {nombre: 'Arroz', cantidad: 3, precio: 6};

carrito.push(item);

console.log(carrito);
