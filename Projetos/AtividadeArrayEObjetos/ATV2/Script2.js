let filmes = [
    {
        id: 1,
        titulo: "Velozes e furiosos",
        genero: "Ação",
        ano: 2001

    },
    {
        id: 2,
        titulo: "Carros 2",
        genero: "Animação",
        ano: 2011
    },
    {
        id: 3,
        titulo: "O segredo dos animais",
        genero: "Animação",
        ano: 2017
    }
]

console.log(filmes);

console.log(filmes[0].titulo);

console.log(filmes[1].genero);

for (let i = 0; i < filmes.length; i++) {
    console.log(filmes[i])
}

for (let i = 0; i < filmes.length; i++) {
    console.log(filmes[i].titulo)
}
