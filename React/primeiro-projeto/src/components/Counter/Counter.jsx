import React from 'react';

export class Counter extends React.Component {
  constructor() {
    super();
    // this.contador = 0;
    this.state = { contador: 0, name: '', password: '' };
  }

  render() {
    return (
      <div style={{ marginTop: '20px', marginLeft: '20px' }}>
        <h1>{this.state.contador}</h1>

        <div>
          <button
            onClick={() => {
              //   this.contador -= 1;
              this.setState({ contador: this.state.contador - 1 });
            }}
          >
            Diminuir
          </button>
          <button
            onClick={() => {
              //   this.contador += 1;
              this.setState({ contador: this.state.contador + 1 });
            }}
          >
            Aumentar
          </button>
        </div>

        <form style={{ marginTop: '40px' }}>
          <input
            type="text"
            placeholder="Digite seu nome..."
            value={this.state.name}
            onChange={(eventInput) => {
              this.setState({ name: eventInput.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Digite sua senha..."
            value={this.state.password}
            onChange={(eventInput) => {
              this.setState({ password: eventInput.target.value });
            }}
          />
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}
