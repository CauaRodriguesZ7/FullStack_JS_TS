/*
Luis Otavio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e se IMC é de...
*/

const nome = 'Luis Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmMetro = 1.80;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNacimento;

indiceMassaCorporal = peso / (alturaEmMetro * alturaEmMetro);
anoNacimento = 2019 - idade;

// Tempalte strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, e pesa ${peso} kg.`);
console.log(`Tem ${alturaEmMetro} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNacimento}`)