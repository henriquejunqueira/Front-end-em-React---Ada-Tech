import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1240px;
  height: 100%;
  margin: 4rem auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 2rem;

  // ! esse & > * é uma condicional do scss: quer dizer que o que vier um nível abaixo do Container (representado por &, que quer dizer ele mesmo, igual o this) será estilizado
  & > * {
    flex: 1 300px;
  }
`;
