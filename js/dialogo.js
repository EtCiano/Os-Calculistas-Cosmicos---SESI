const personagem = JSON.parse(localStorage.getItem('personagem'));
const itens = JSON.parse(localStorage.getItem('itens'));

console.log(personagem);
console.log(itens);

export {personagem, itens};