function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Cauã', 'Aquiles', 18);
const pessoa2 = criaPessoa('Jax', 'Teller', 30);
const pessoa3 = criaPessoa('Sheldon', 'Copper', 34)

console.log(pessoa1.nome, pessoa1.sobrenome);
console.log(pessoa2.nome, pessoa2.sobrenome);
console.log(pessoa3.nome, pessoa3.sobrenome);