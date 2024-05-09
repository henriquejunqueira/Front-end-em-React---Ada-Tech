import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

// ! o describe() agrupa testes que tenham caracteristicas em comum
describe('Counter > Unit tests', () => {
  // ! verifica o teste com jest, são obrigatórios dois argumentos: uma string e uma função seta
  test('it should render Counter component correctly', () => {
    /* , async () => {*/
    render(<Counter />); // ! testa a renderização do componente

    // ! screen acessa o navegador e getByText pega o elemento com o texto especificado
    //   const counterValueElement = screen.getByText('0');
    //   const counterValueElement = screen.getByText('Aumentar');

    // ! consulta cada elemento exposto na árvore de acessibilidade do componente seguindo as regras
    // * 'heading' indica que é uma tag de cabeçalho (h1..h6) e level: 1 indica que é expecificamente um h1
    // const counterValueElement = screen.getByRole('heading', { level: 1 });

    // ! o findByRole é útil quando o elemento demora pra aparecer na tela, mudar o valor
    // const counterValueElement = await screen.findByRole('heading', {
    //   level: 1,
    // });

    // ! queryByRole busca por um elemento e se existir ele retorna o elemento, se não ele retorna null
    const counterValueElement = screen.queryByRole('heading', {
      level: 1,
    });

    // * 'button' indica que o elemento procurado é uma tag, e name: 'Aumentar' é expecificamente o texto desse botão
    // const increaseButtonElement = screen.getByRole('button', {
    //   name: 'Aumentar',
    // });
    const increaseButtonElement = screen.getByRole('button', {
      name: 'Aumentar',
    });

    // * 'button' indica que o elemento procurado é uma tag, e name: 'Diminuir' é expecificamente o texto desse botão
    const decreaseButtonElement = screen.getByRole('button', {
      name: 'Diminuir',
    });

    // ! verifica se o texto atribuído ao counterValueElement existe no Counter.
    // ! É necessário importar a biblioteca @testing-library/jest-dom
    //   expect(counterValueElement).toBeInTheDocument();

    // ! verifica se o elemento h1 pego com o getByRole tem o texto expecificado
    expect(counterValueElement).toHaveTextContent('0');

    // ! espera que o texto esteja no documento
    expect(increaseButtonElement).toBeInTheDocument();
    expect(decreaseButtonElement).toBeInTheDocument();
  });

  // ! o it() tem o mesmo funcionamento que o test()
  it('should decreaseButton counter value when increase button is clicked', () => {
    // ? Renderizamos o componente Counter
    render(<Counter />);

    // ? Clicar no botão 'Dimiuir' para aumentar o valor do contador
    const counterValueElement = screen.getByRole('heading', { level: 1 });
    const decreaseButton = screen.getByRole('button', { name: 'Diminuir' });

    // * simula um evento, nesse caso um evento de click
    userEvent.click(decreaseButton);

    // ? Espero que o valor do contador seja -1
    expect(counterValueElement).toHaveTextContent('-1');
  });

  it('should increase counter value when increase button is clicked', () => {
    // ? Renderizamos o componente Counter
    render(<Counter />);

    // ? Clicar no botão 'Aumentar' para aumentar o valor do contador
    //   const counterValueElement = screen.getByRole('heading', { level: 1 });
    const increaseButton = screen.getByRole('button', { name: 'Aumentar' });

    // * simula um evento, nesse caso um evento de click
    userEvent.click(increaseButton);

    // ? Pega pelo texto e vê se ele é exatamente '1'
    // const counterValueElement = screen.getByText('1');
    // const counterValueElement = screen.queryByText('-1', { exact: true });
    const counterValueElement = screen.queryByText('1', { exact: true });

    // ? Espero que o valor do contador seja 1
    //   expect(counterValueElement).toHaveTextContent('1');

    // ? Espera que o elemento esteja no documento
    expect(counterValueElement).toBeInTheDocument();

    // ? Espera que o elemento seja nulo
    // expect(counterValueElement).toBeNull();
  });
});

// describe('Counter > Integration tests', () => {
// ! criando um novo agrupador de testes, porém para testes de integração
// });
