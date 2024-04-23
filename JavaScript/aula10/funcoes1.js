// * Definição da função

// function saudacao(){
//     console.log('Olá, seja bem-vindo(o) ao curso de Front=end em React!');
// }

// saudacao(); // chamada da função saudação
// saudacao();
// saudacao();

// * Função com parâmetros

// ? Exemplo 1
// function saudacao(nomeEstudante, curso = "Front-end em React"){
//     return `Olá ${nomeEstudante}! Seja bem-vindo(a) ao curso de ${curso}!`;
// }

// saudacao('Henrique', 'Front-end em React'); // chamada da função saudação
// const mensagem = saudacao('Henrique', 'Front-end em React');
// const mensagem = saudacao('Henrique', "Back-end em Node.js");
// const mensagem = saudacao('Henrique');

// console.log(mensagem);

// ? Exemplo 2
// function somar(numero1, numero2){
//     return numero1 + numero2;
// }

// const resultado = somar(2, 3);

// console.log(resultado);
// console.log(resultado / 10);

// * Funções anônimas
// const dobroNumero = function (numero){
//     return numero * 2;
// }

// const dobro = dobroNumero(2);
// console.log(dobro);

// * Arrow Functions
const subtrair = (numero1, numero2) => {
    return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => numero1 * numero2;

const triploNumero = numero => numero * 3;