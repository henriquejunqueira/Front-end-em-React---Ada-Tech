// reduce

const numeros = [1, 2, 3, 4, 5];

// ? Exemplo 01: soma dos elementos 
// acumulador: aquilo que está sendo reduzido
// const soma = numeros.reduce((acumulador, elemento) => {
//     return elemento + acumulador;
// }, 0); // 0 é o valor inicial do acumulador

// console.log(soma);

// ? Exemplo 02: média
// const media = numeros.reduce((acumulador, elemento, _, arrayCompleto) => { // um underline indica que está sendo ignorado o parãmetro
//     return  (elemento / arrayCompleto.length + acumulador);
// }, 0);

// console.log(media);

// ? Exemplo 03: soma pares
// const somaPares = numeros.reduce((acumulador, numero) => {
     // se o número for par
//     if(numero % 2 === 0){
//         return acumulador + numero;
//     }else{
//         return acumulador;
//     }
// }, 0);

// console.log(somaPares);

// ? Exemplo 4: Carrinho
const carrinho = [
    { produto: 'Feijão', preco: 7.98, quantidade: 3 },
    { produto: 'Arroz', preco: 4.98, quantidade: 5 },
    { produto: 'Leite 1L', preco: 6.99, quantidade: 2 },
];

const totalPagar = carrinho.reduce((acumulador, item) => {
    return item.preco * item.quantidade + acumulador;
}, 0);

console.log(totalPagar);