// * Object Literal

const array = ['Henrique', 29, 1.76, true];

const pessoa = { 
    nome: 'Henrique',
    idade: 29,
    altura: 1.76,
    programador: true,
    hobbies: ['Jogar FIFA', 'Academia', 'Ler'],
    imprimirAlgo: () => {
        console.log('Chamada função imprimir algo!');
    }
};

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa.hobbies);
console.log(pessoa.hobbies[2]);
console.log(pessoa['idade']);

pessoa.profissao = 'Desenvolvedor'; // Adicionando novo atributo ao objeto pessoa

pessoa.nome = 'João'; // reatribuindo valor ao atributo nome

console.log(pessoa);

delete pessoa.altura; // deletando atributo. Uso: delete objeto.atributo

console.log(pessoa);

pessoa.imprimirAlgo();

const idade = 27;
const altura = 1.77;

const objeto = {
    idade,
    altura,
}

console.log(objeto);

const { nome, hobbies } = pessoa;

console.log(nome);
console.log(hobbies);
console.log(pessoa);

function funcao(array){
    let acc = 0;

    for(let elemento of array){
        acc += elemento;
    }

    return (acc / array.length);
}

console.log(funcao([4, 6, 4, 2]));