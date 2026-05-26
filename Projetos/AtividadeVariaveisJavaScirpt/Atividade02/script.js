const media = (a, b) => {
  if ((a + b) / 2 >= 7) {
    return"Aprovado";
  } else {
    return"Reprovado";
  }
};

console.log(media(6, 8))
