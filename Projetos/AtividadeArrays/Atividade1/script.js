let participantes = ["Marcos", "Fernanda", "Juliana"]
console.log(participantes);

participantes.push("Gabriel");
console.log(participantes);

participantes.unshift("Patricia")
console.log(participantes);

console.log(participantes.length);

console.log(participantes.includes("Juliana"));

console.log(participantes.includes("Carlos"));

console.log(participantes.indexOf("Fernanda"));

participantes.pop();
console.log(participantes);

let lista = participantes.join(" | ");
console.log(lista);