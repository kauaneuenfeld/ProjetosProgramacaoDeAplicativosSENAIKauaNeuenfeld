//FUNÇÃO TRADICIONAL
function soma(a, b) {
  return a + b;
}

//console.log(soma(2, 10));
let resultado = soma(5, 6);
console.log(resultado);

//funcao sem return
function saudacao() {
  console.log("Bem vindo ao sistema");
}

saudacao();

//arrow function
const multiplicar = (a, b) => {
  return a * b;
};

console.log(multiplicar(5, 19));

//arrow function - forma curta
const dobrar = (numero) => numero * 2;
console.log(dobrar(10));

//exemplo pratico - verificar idade
const verificarIdade = (idade) => {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
};

console.log(verificarIdade(16));
