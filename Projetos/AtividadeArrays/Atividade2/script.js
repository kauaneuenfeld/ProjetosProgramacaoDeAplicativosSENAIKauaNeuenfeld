let pedidos = ["Hamburguer", "Batata Frita", "Refrigerante"];

pedidos.push("Milk shake");
console.log(pedidos);

pedidos.shift();
console.log(pedidos);

console.log(pedidos.length);

for (let Pedidos of pedidos) {
    console.log(Pedidos);
}

for (let indice in pedidos) {
    console.log(indice);
    console.log(pedidos[indice]);
}
