import { StatsCard } from '../StatsCard/StatsCard';
import styles from './styles.module.scss';

// import { useState } from 'react'; // ! importação do hook useState

// ? useState é um hook que trabalha com estados dos objetos

export const Header: React.FC = () => {
  // ! um hook sempre tem parênteses depois do nome
  // const [parametroEstado, funcaoParaAlterarEstado] = useState(0);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>
          <span>Bem-vindo, Henrique</span>
        </div>
        <div>
          <StatsCard title="Total de Tarefas" value={5} />
          <StatsCard title="Tarefas Pendentes" value={4} />
          <StatsCard title="Tarefas Concluídas" value={1} />
        </div>
      </div>
    </header>
  );
};
