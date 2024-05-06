import { FormEvent, useEffect, useRef, useState } from 'react';

import style from './style.module.scss';

export const Refs: React.FC = () => {
  //   const ref = useRef(0); // { current: 0} // Link Reference: https://react.dev/reference/react/useRef
  //   const [toggle, setToggle] = useState(false);
  //   const inputRef = useRef<HTMLInputElement>(null);
  //   const divRef = useRef<HTMLInputElement>(null);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  //   console.log(inputRef);

  //   useEffect(() => {
  //     console.log(inputRef);
  //   }, [inputRef]);

  //   useEffect(() => {
  //     console.log(divRef);
  //   }, [divRef]);

  //   function handleClickOnButton() {
  //     ref.current = ref.current + 1;
  //     console.log(ref.current);
  //   }

  //   function handleClickOnButton() {
  //     if (inputNameRef.current != null) {
  //       inputRef.current.addEventListener()
  //       inputRef.current.value
  //       inputNameRef.current.focus(); // ! colocando o foco no input
  //     }
  //   }

  function handleOnSubmit(eventForm: FormEvent) {
    eventForm.preventDefault(); // ! evita que a página seja recarregada ao submeter o formulário
    // console.log('Submeteu...');
    console.log(inputNameRef.current?.value);
    console.log(inputEmailRef.current?.value);
    console.log(inputPasswordRef.current?.value);
  }

  return (
    <form
      className={style.divRef}
      onSubmit={(eventForm) => handleOnSubmit(eventForm)}
    >
      <h1>useRef</h1>
      {/* <p>{`O valor da ref é: ${ref.current}`}</p> */}

      <br />

      <input type="text" placeholder="Nome Completo... " ref={inputNameRef} />
      <input type="email" placeholder="Email..." ref={inputEmailRef} />
      <input type="password" placeholder="Senha..." ref={inputPasswordRef} />
      {/* <div ref={divRef}></div> */}

      <br />

      {/* <button onClick={handleClickOnButton}>Clique aqui</button> */}
      {/* <button onClick={handleClickOnButton}>Foque no input</button> */}
      <button type="submit">Submeter</button>

      {/* <br /> */}
      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
    </form>
  );
};
