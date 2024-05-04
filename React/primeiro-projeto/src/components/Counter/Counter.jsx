import React from 'react';
import { useState } from 'react';

export function Counter() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px' }}>
      <h1>{contador}</h1>

      <div>
        <button
          onClick={() => {
            //   this.contador -= 1;
            // this.setState({ contador: this.state.contador - 1 });
            setContador(contador - 1);
          }}
        >
          Diminuir
        </button>
        <button
          onClick={() => {
            //   this.contador += 1;
            // this.setState({ contador: this.state.contador + 1 });
            setContador(contador + 1);
          }}
        >
          Aumentar
        </button>
      </div>

      {/* <form style={{ marginTop: '40px' }}>
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
      </form> */}
    </div>
  );
}
