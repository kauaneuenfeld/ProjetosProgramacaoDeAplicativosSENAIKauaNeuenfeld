let jogos = [
  {
    id: 1,
    nome: "Minecraft",
    categoria: "Sandbox",
  },
  {
    id: 2,
    nome: "Free Fire",
    categoria: "Ação",
  },
  {
    id: 3,
    nome: "Roblox",
    categoria: "Criativo",
  },
  {
    id: 4,
    nome: "Fifa",
    categoria: "Futebol",
  },
];

console.log(jogos);

jogos.push({
  id: 5,
  nome: "Valorant",
  categoria: "Shooter",
});

console.log(jogos);

for (let i = 0; i < jogos.length; i++) {
  console.log(jogos[i]);
}

for (let i = 0; i < jogos.length; i++) {
  if (jogos[i].id === 3) {
    console.log(jogos[i]);
  }
}
