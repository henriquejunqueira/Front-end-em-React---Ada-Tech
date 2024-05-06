import { useCallback, useMemo, useState } from 'react';
import style from './style.module.scss';

interface MemoizationProps {
  financialData: {
    incomes: number[];
    outcomes: number[];
  };
}

export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {
  // ! Estado que define se os valores devem ser mostrados ou não
  const [showValues, setShowValues] = useState(true);

  // Link Reference: https://react.dev/reference/react/useMemo
  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((total, income) => {
      console.log('Calculando o total de receitas...');
      return (total += income);
    }, 0);
  }, [financialData.incomes]);

  const totalOutcomes = useMemo(() => {
    return financialData.outcomes.reduce((total, outcome) => {
      console.log('Calculando o total de despesas...');
      return (total += outcome);
    }, 0);
  }, [financialData.outcomes]);

  // Link Reference: https://react.dev/reference/react/useCallback
  const aplicarDesconto = useCallback(
    (desconto: number) => {
      return totalOutcomes * (1 - desconto);
    },
    [totalOutcomes]
  );

  return (
    <div className={style.divRef}>
      <h1>Memoization</h1>

      <h2>useMemo</h2>

      <p>{`Total de Receitas: R$ ${showValues ? totalIncomes : 'XXXXXX'}`}</p>

      <br />
      <p>{`Total de Despesas: R$ ${showValues ? totalOutcomes : 'XXXXXX'}`}</p>

      <br />
      <br />
      <button
        className={style.botaoSubmit}
        onClick={() => setShowValues(!showValues)}
      >
        {showValues ? 'Ocultar valores' : 'Mostrar valores'}
      </button>
    </div>
  );
};
