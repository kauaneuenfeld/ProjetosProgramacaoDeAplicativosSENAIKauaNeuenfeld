//Criando arrays
let usuarios = [10, "Carlos", "Maria"];
console.log(usuarios);

//Acessando Itens
console.log(usuarios[1]);

//Adicionando item no final da arrays
//push()
usuarios.push("Pedro");
console.log(usuarios);

//Remove o último item
//pop()
usuarios.pop();
console.log(usuarios);

//Remove o primeiro item
//shift()
usuarios.shift();
console.log(usuarios);

//mostra a quantidade de itens
//length()

console.log(usuarios.length);

//Verifica se um item existe
//includes()

console.log(usuarios.includes("Maria"));

//Mostra a posição do item
//indexOf()
console.log(usuarios.indexOf("Maria"));

//Remove ou adciona itens
//splice()

usuarios.splice(0, 1);
console.log(usuarios);

//Copia parte do array
//slice

//sintaxe:
//array.slice(inicio, fim)

usuarios2 = [10, "Carlos", "Maria", "Pedro", "Joao"];

let novoArrays = usuarios2.slice(0, 2);
console.log(novoArrays);

//Inverter Ordem
//reverse()

usuarios2.reverse();
console.log(usuarios2);

//Ordena em ordem alfabética
//sort()

usuarios2.sort();
console.log(usuarios2);
