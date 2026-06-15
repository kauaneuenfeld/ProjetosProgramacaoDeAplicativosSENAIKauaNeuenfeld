let funcionarios = [
  {
    id: 1,
    nome: "Kaua",
    idade: 30,
    cargo: "Desenvolvedor",
  },
  {
    id: 2,
    nome: "Gedian",
    idade: 25,
    cargo: "Pião",
  },
  {
    id: 3,
    nome: "Dede",
    idade: 35,
    cargo: "Professor",
  },
  {
    id: 4,
    nome: "Peterson",
    idade: 28,
    cargo: "Marketing",
  },
];

console.log(funcionarios);

for (let i = 0; i < funcionarios.length; i++) {
  if (funcionarios[i].id === 3) {
    console.log("Funcionário encontrado: ");
    console.log(funcionarios[i]);
  }
}
