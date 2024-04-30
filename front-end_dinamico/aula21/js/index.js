// * Tipos de eventos

// TODO evento click
const botaoAumentar = document.querySelector('#aumentar-botao'); // ! pega o botão dentro da section
const botaoDininuir = document.querySelector('#diminuir-botao');

const contadorElemento = document.querySelector('#contador');

const input = document.querySelector('#input');

// ! adiciona um evento
botaoAumentar.addEventListener('click', (event) => {
  // ! pega o valor do contador com textContent, converte para number e armazena em valorAtual
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual + 1; // ! faz o incremento do contadorElemento
});

// ! adiciona um evento
botaoDininuir.addEventListener('click', (event) => {
  // ! pega o valor do contador com textContent, converte para number e armazena em valorAtual
  const valorAtual = Number(contadorElemento.textContent);
  contadorElemento.textContent = valorAtual - 1; // ! faz o incremento do contadorElemento
});

// TODO evento input
input.addEventListener('input', () => {
  console.log(input.value);
});

// * Adicionando estilos inline no elemento contador
contadorElemento.style.color = 'red'; // altera a cor do elemento
