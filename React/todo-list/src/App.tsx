import { useState } from 'react';
import { Header } from './components/Header/Header';

import './styles/global.css';
import { Tasks } from './components/Tasks/Tasks';

function App() {
  const [toggle, setToggle] = useState(false);

  //* useEffect(setup, dependencies?) Link Reference: https://react.dev/reference/react/useEffect
  // ! o useEffect será disparado sempre que alguma variável do array de dependências for alterada
  // ! Por padrão, sempre o useEffect será disparado após a montagem do componente (componentDidMount)
  // useEffect(() => {
  //   console.log('Executando a função do useEffect...');

  //   // ! componentWillUnmount => Cleanup Function
  //   return () => {
  //     console.log(
  //       'Isso aqui vai ser executado quando o componente App for desmontado da tela'
  //     );
  //   };
  // }, [toggle]);

  return (
    <>
      <Header />
      <Tasks />

      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
    </>
  );
}

export default App;
