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

//forEach
//Percorre o array
usuarios2.forEach(function (usuario) {
  console.log(usuario);
});

/* usuarios -> arrays
    for each -> percorrer todos elementos
    function(usuarios) -> funcao executada para cada elemento
    usuario -> variavel temporaria que recebe cada valor do array
*/

//for of
//outra forma de percorrer
//o for...of percorre valores do arrau e ignora os indices e pega apenas os valores

for (let usuario of usuarios) {
  console.log(usuario);
}

//for in
//mais utilizado
//percorre os indices, podendo acessar o valor e o indice
for (let indice in usuarios2) {
  console.log(indice);
  console.log(usuarios2[indice]);
}

//for tradiconal
//mais utilizado
//o length de informa a quantidade de elemnetos que existem no array
for (let i = 0; i < usuarios.length; i++) {
  console.log(i);
  console.log(usuarios[i]);
}

//join
//transforma array em texto
//o metodo join(" - ") percorre todos os elementos e coloca " - " entre eles
let nomes = usuarios2.join(" - ");
console.log(nomes);

//concat
//junta arrays
let admin = ["amin1", "Admin2"];
let sistema = usuarios.concat(admin);
console.log(sistema);
