// * Lendo um arquivo JSON

const fs = require('fs');
// const arquivo =
//   '/home/henrique/Documentos/projetos/desenvolvimento/Front-end-em-React-Ada-Tech/exemplo_eslint/.prettierrc.json';

// fs.readFile(arquivo, (erro, dados) => {
//   if (erro) {
//     console.log('Erro:', erro);
//   } else {
// dados: Buffer com os dados do arquivo json
// console.log(JSON.parse(dados)); // ! convertendo dados do arquivo para json
//     const dadosObjeto = JSON.parse(String(dados)); // convertendo o buffer em um objeto do JS
//     console.log(dadosObjeto.rules);
//   }
// });

// * Convertendo JSON, em formato de string, para um objeto.

// const jsonString = '{"nome": "Henrique"}';
// console.log(JSON.parse(jsonString));

// * Convertendo um objeto do JS, em um JSON (string).
const pessoa = {
  nome: 'Tony Stark',
  papel: 'Homem de Ferro',
};

console.log(JSON.stringify(pessoa));
