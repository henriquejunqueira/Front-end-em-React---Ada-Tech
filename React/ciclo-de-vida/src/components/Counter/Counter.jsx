import React from 'react';

export class Counter extends React.Component {
  // * Métodos de montagem: constructor(), UNSAFE_componentWillMount(), componentDidMount() e render()
  constructor() {
    super();
    this.state = { contador: 0 };
    console.log('Construindo a classe Counter');
  }

  UNSAFE_componentWillMount() {
    console.log('O componente contador será montado');
  }

  componentDidMount() {
    console.log('O componente foi montado');

    document.addEventListener('scroll', this.consoleScroll);
  }

  // * Métodos de atualização shouldComponentUpdate(), UNSAFE_componentWillUpdate(), componentDidUpdate()
  // ! método chamado sempre que uma prop ou estado for atualizado
  shouldComponentUpdate() {
    return true;
    // return false;
    // if (this.state.contador === 2) return false;
    // return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log('O componente será atualizado!');
  }

  componentDidUpdate() {
    console.log('O componente foi atualizado!');
  }

  // * Método de desmontagem componentWillUnmount()
  componentWillUnmount() {
    console.log('O componente será desmontado...');

    document.removeEventListener('scroll', this.consoleScroll);
  }

  consoleScroll() {
    console.log('Rolando a página...');
  }

  render() {
    console.log('renderizando');
    return (
      <div>
        <h1>{this.state.contador}</h1>

        <button
          onClick={() => this.setState({ contador: this.state.contador - 1 })}
        >
          Diminuir
        </button>
        <button
          onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          Aumentar
        </button>
      </div>
    );
  }
}
