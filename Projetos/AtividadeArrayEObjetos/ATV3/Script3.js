let alunos = [
  {
    matricula: 11111,
    nome: "Andre",
    nota: 10,
  },
  {
    matricula: 22222,
    nome: "Kaua",
    nota: 7,
  },
  {
    matricula: 33333,
    nome: "Gedian",
    nota: 5,
  },
  {
    matricula: 44444,
    nome: "Peterson",
    nota: 8,
  },
];

console.log(alunos);

alunos.push({
  matricula: 55555,
  nome: "Natalino",
  nota: 9,
});

console.log(alunos);

alunos.pop();

console.log(alunos);

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome);
}