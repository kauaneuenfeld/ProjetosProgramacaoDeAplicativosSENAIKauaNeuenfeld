//array de objetos
//Objetos
//Criando objeto chamado usuario
let usuario = {
  //Propriedade : valor
  nome: "Fulano",
  idade: 20,
  cidade: "Joinville",
};

console.log(usuario);

//Acessando um propriedade do objeto
console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.cidade);

//Adicionando uma nova propriedade
usuario.email = "fulano@email.com";
console.log(usuario);

//Removendo uma propriedade
delete usuario.cidade;
console.log(usuario);

//arrays de objetos

let usuarios = [
  {
    id: 1,
    nome: "Natalino",
    idade: 20,
  },
  {
    id: 2,
    nome: "Andre",
    idade: 37,
  },
  {
    id: 3,
    nome: "Kaua",
    idade: 16,
  },
];
console.log(usuarios);

console.log(usuarios[1]);

console.log(usuarios[0].nome);

//Percorrendo arryas com for

for (let i = 0; i < usuarios.length; i++) {
  console.log(usuarios[i].idade);
}

usuarios.push({
  id: 4,
  nome: "Gedian",
  idade: 17,
});

console.log(usuarios);

usuarios.pop();

console.log(usuarios);

//Procurando usuario por id
for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].id === 2) {
    console.log(usuarios[i]);
  }
}
