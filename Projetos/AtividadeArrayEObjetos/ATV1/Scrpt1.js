let produto = {
  nome: "Carretilha",
  preco: 565.99,
  quantidade: 10,
};

console.log(produto);

console.log(produto.nome);

produto.preco = 499.99;

produto.categoria = "Pesca";

delete produto.quantidade;

console.log(produto);
