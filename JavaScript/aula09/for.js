const prompt = require('readline-sync');

// expressão 1: inicialização da variável de controle
// expressão 2: condição de permanência do for
// expressão 3: o incremento da variável de controle

// for(expressão 1; expressão 2; expressão 3){
    // excopo do for
    // }
    
// let execuções = 0;
// for(let i = 0; i < 5; i++){
//     console.log(i);
//     execuções++;
// }

// console.log('Executado: ' + execuções + ' vezes');

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// Limpando o console
// console.clear();

// ? Exemplo 1: maior número
// let maiorNumero = 0;
// let numeroInformado;

// for(let i = 1; i <= 5; i++){
//     numeroInformado = Number(prompt.question('Informe um número positivo: '));

//     if(numeroInformado > maiorNumero){
//         maiorNumero = numeroInformado;
//     }
// }

// console.log('Maior número: ', maiorNumero);

// ? Exemplo 2: Percorrendo strings com for

// const nome = 'Henrique';

// console.log(nome.length);
// console.log(nome[0]);
// console.log(nome[3]);

// for(let i = 0; i < nome.length; i++){
//     console.log(nome[i]);
// }

// * Arrays
// const nota1 = 10;
// const nota2 = 8;
// const nota3 = 5;

// const notasAluno = [10, 8, 5];
// const pessoa = ['Henrique', 29, 1.76, true];

// console.log(notasAluno);
// console.log(pessoa);
// console.log(pessoa[1]);

// pessoa[3] = false;

// console.log(pessoa);

// console.log(notasAluno.length);
// console.log(pessoa.length);

// * Fatiamento de arrays
// const numeros = [40, 34, 67, 89, 23, 10];

// console.log(numeros.slice(0, 2));
// console.log(numeros.slice(2, 2));
// console.log(numeros.slice(2));

// * Adicionando elementos no final do array
// numeros.push(0);
// console.log(numeros);

// * Adicionando elementos no início do array
// numeros.unshift(-1);
// console.log(numeros);

// * pop: remove o elemento que está no final do array
// numeros.pop(); // remove o elemento 0 (do final)
// numeros.pop();
// console.log(numeros);

// * shift: remove o primeiro elemento do array
// numeros.shift();
// console.log(numeros);

// * includes: verifica se um elemento existe no array
// console.log(numeros.includes(20));
// console.log(numeros.includes(10));

// if(numeros.includes(20)){
//     console.log('Opa! Existe o número 10 dentro do array numeros!');
// }else{
//     console.log('Não existe o número 20 no array numeros.');
// }

// const existeNumero = numeros.includes(20);
// console.log(existeNumero);

// * indexOf: verifica a posição do elemento no array, se retornar -1 o elemento não existe no array
// const indiceElemento = numeros.indexOf(20);
// const indiceElemento = numeros.indexOf(10);

// console.log(indiceElemento);

// * lastIndexOf: verifica a ultima ocorrẽncia do elemento no array, se retornar -1 o elemento não existe no array
// const numeros = [40, 34, 23, 67, 89, 23, 10];
// const indiceElemento = numeros.lastIndexOf(23);

// console.log(indiceElemento);

// * Percorrendo arrays com for
// const arr = [45, 36, 90, 76, 32, 7];

// for(let i = 0; i < arr.length; i++){
//     console.log(i, arr[i]);
// }

// for-of
// for(const elemento of arr){
//     console.log(elemento);
// }

// for-in
// for(const indice in arr){
//     console.log(indice, typeof indice);
//     console.log(arr[0]);
// }

for(let i = 0; i <= 9; i+=2){
    console.log(i);
}