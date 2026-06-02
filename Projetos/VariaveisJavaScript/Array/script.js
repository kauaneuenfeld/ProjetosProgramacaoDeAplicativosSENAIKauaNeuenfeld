let usuarios = [20, "Carlos", "Maria"];

console.log(usuarios);

//acesando itens
console.log(usuarios[1]);

//adicionando item no final da array
//push()
usuarios.push("Pedro");
console.log(usuarios);

//remove o ultimo item
//pop()
usuarios.pop();
console.log(usuarios);

//remove o primeiro item
//shift
usuarios.shift;
console.log(usuarios);

//mostra a quantidade de itens
//lenght
console.log(usuarios.length);

//verifica se existe um item
//includes()
console.log(usuarios.includes("Maria"));

// mostra a posição do item
//indexOf()
console.log(usuarios.indexOf("Maria"));

//remove ou adiciona itens em qualquer posição
//splice()
usuarios.splice(0, 1);
console.log(usuarios);

//copia parte do array
//slice()
//array.slice(inicio, fim)
usuarios2 = [20, "Carlos", "Maria", "Pedro", "Joao"]

let novoArray = usuarios2.slice(0, 2);
console.log(novoArray);

//inverter a ordem
//reverse()
usuarios2.reverse();
console.log(usuarios2);

//ordem alfabetica
//sort()
usuarios2.sort();
console.log(usuarios2);

